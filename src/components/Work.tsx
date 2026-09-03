import { caseStudies } from '../content'
import { CaseMedia } from './CaseMedia'

export function Work() {
  return (
    <section id="work">
      <h2 className="sr">Selected work</h2>

      {caseStudies.map((study) => (
        <article className="case sr" key={study.title}>
          <div className="kicker">
            {study.kicker[0]}
            <br />
            {study.kicker[1]}
          </div>
          <div>
            <h3>{study.title}</h3>
            <p>{study.body}</p>
            {study.media && <CaseMedia media={study.media} />}
            <div className="tags">
              {study.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {study.link && (
              <a
                className="case-link"
                href={study.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {study.link.label} ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}
