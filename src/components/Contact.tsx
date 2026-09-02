import { contact, site } from '../content'

export function Contact() {
  return (
    <section id="contact">
      <h2 className="sr">{contact.heading}</h2>
      <p className="sr">{contact.blurb}</p>
      <div className="links sr">
        <a className="btn btn-primary" data-magnetic="" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a className="btn btn-ghost" data-magnetic="" href={site.github} rel="noopener">
          GitHub
        </a>
        <a className="btn btn-ghost" data-magnetic="" href={site.linkedin} rel="noopener">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
