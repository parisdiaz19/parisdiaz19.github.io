import { site } from '../content'

export function Footer() {
  return (
    <footer>
      <div>
        © {site.copyrightYear} {site.name} · Built by hand, no template
      </div>
    </footer>
  )
}
