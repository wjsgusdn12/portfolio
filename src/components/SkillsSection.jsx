export default function SkillsSection({ skillGroups, getSkillIcon }) {
  return (
    <section id="skills" className="section section-accent reveal">
      <div className="section-head">
        <p className="section-eyebrow">Tech</p>
        <h3 className="section-title">SKILLS</h3>
      </div>
      <div className="skills-card">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.title}>
            <div className="skill-title-wrap">
              <div className="skill-title">{group.title}</div>
            </div>
            <div className="skill-items">
              {group.tags.map((tag) => (
                <span className="skill-item-token" key={tag}>
                  <img
                    className="skill-item-icon"
                    src={getSkillIcon(tag)}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                  />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
