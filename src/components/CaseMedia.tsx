import { useEffect, useMemo, useRef } from "react";
import type { CaseStudyMedia } from "../content";

/**
 * Muted, looping preview clip for a case study. Plays only while in view
 * and stays on its poster frame (with controls) for reduced-motion users.
 */
export function CaseMedia({ media }: { media: CaseStudyMedia }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduced = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const video = ref.current;
    if (!video || reduced) return;
    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <figure className="case-media">
      <video
        ref={ref}
        src={base + media.src}
        poster={media.poster ? base + media.poster : undefined}
        aria-label={media.alt}
        muted
        loop
        playsInline
        preload="metadata"
        controls={reduced}
      />
    </figure>
  );
}
