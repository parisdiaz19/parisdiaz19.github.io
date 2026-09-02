import { useLayoutEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Wires up every GSAP-driven behaviour on the page, scoped to `scope`:
 * headline word reveal, scroll progress bar, scroll reveals, the skills
 * marquee loop, and magnetic buttons. Everything is torn down on unmount.
 *
 * Runs in a layout effect so initial `from()` states are applied before
 * first paint and nothing flashes into view.
 */
export function useSiteMotion(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = scope.current
    if (!root) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Graceful fallback: with reduced motion, show everything and animate nothing.
    if (reduced) {
      root.querySelectorAll<HTMLElement>('.sr, [data-hero]').forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const listeners: Array<() => void> = []

    const ctx = gsap.context(() => {
      // --- Hero: word-level reveal, then the supporting copy ---
      gsap
        .timeline({ defaults: { ease: 'expo.out' } })
        .from('#headline .word > span', { yPercent: 110, duration: 0.9, stagger: 0.045 })
        .from('[data-hero]', { y: 18, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.45')

      // --- Scroll progress bar ---
      gsap.to('.progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      })

      // --- Scroll reveals ---
      root.querySelectorAll<HTMLElement>('.sr').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        })
      })

      // --- Skills marquee (items are rendered twice for a seamless loop) ---
      gsap.to('.marquee-track', { xPercent: -50, ease: 'none', duration: 28, repeat: -1 })

      // --- Magnetic buttons (desktop pointer only) ---
      if (window.matchMedia('(pointer: fine)').matches) {
        root.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((btn) => {
          const setX = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3.out' })
          const setY = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3.out' })
          const onMove = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect()
            setX((e.clientX - (r.left + r.width / 2)) * 0.25)
            setY((e.clientY - (r.top + r.height / 2)) * 0.35)
          }
          const onLeave = () => {
            setX(0)
            setY(0)
          }
          btn.addEventListener('mousemove', onMove)
          btn.addEventListener('mouseleave', onLeave)
          listeners.push(() => {
            btn.removeEventListener('mousemove', onMove)
            btn.removeEventListener('mouseleave', onLeave)
          })
        })
      }
    }, root)

    // --- Underline sweep on the emphasised headline word ---
    // Driven by a CSS transition on `.u-in .hero h1 em::after`. Reading the
    // pseudo-element's computed style first forces a style pass, so the browser
    // has a "before" state and actually transitions instead of snapping.
    const em = root.querySelector<HTMLElement>('#headline em')
    if (em) void getComputedStyle(em, '::after').transform
    document.body.classList.add('u-in')

    return () => {
      listeners.forEach((off) => off())
      document.body.classList.remove('u-in')
      ctx.revert()
    }
  }, [scope])
}
