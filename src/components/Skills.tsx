import { skillGroups } from "../content";

export function Skills() {
  return (
    <section id="skills">
      <h2 className="sr">The tools I work with</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="sr" key={group.heading}>
            <h3>{group.heading}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
