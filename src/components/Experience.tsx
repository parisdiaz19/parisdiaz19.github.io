import { jobs } from '../content'

export function Experience() {
  return (
    <section id="experience">
      <h2 className="sr">Experience</h2>
      {jobs.map((job) => (
        <div className="job sr" key={`${job.role}-${job.org}`}>
          <div className="role">{job.role}</div>
          <div className="org">{job.org}</div>
          <ul>
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
