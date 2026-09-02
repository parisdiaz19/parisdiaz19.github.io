import { navLinks, site } from '../content'

export function Nav() {
  return (
    <nav>
      <a className="wordmark" href="#top">
        {site.name}
      </a>
      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
