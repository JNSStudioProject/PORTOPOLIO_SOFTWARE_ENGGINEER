import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skillCategories } from '../data/skills';
import './Skills.css';

const LEVEL_LABEL = (n) => n >= 85 ? 'Strong' : n >= 75 ? 'Solid' : 'Familiar';
const LEVEL_COLOR = (n) => n >= 85 ? 'tag-purple' : n >= 75 ? 'tag-blue' : 'tag-gray';

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="label">Skills</p>
          <h2 className="section-title">What I work with</h2>
          <div className="divider" />
          <p className="section-sub">
            Every skill here has been applied in a real project, not just a tutorial.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className={`skills__cat reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'visible' : ''}`}
            >
              <h3 className="skills__cat-title">{cat.title}</h3>
              <div className="skills__tags">
                {cat.skills.map(({ name, level }) => (
                  <div key={name} className="skills__tag-item">
                    <span className={`tag ${LEVEL_COLOR(level)}`}>{name}</span>
                    <span className={`skills__level tag ${LEVEL_COLOR(level)}`}>{LEVEL_LABEL(level)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className={`skills__legend reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
          <span className="tag tag-purple">Strong</span> confident, production-used
          <span className="skills__legend-sep" />
          <span className="tag tag-blue">Solid</span> comfortable, multiple projects
          <span className="skills__legend-sep" />
          <span className="tag tag-gray">Familiar</span> working knowledge
        </div>
      </div>
    </section>
  );
}
