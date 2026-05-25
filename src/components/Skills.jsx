import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skillCategories } from '../data/skills';
import { Code2, Server, Monitor, Database, Wrench, GitBranch } from 'lucide-react';
import './Skills.css';

const ICON_MAP = { Code2, Server, Monitor, Database, Wrench, GitBranch };

const LEVEL_LABEL = (n) => n >= 85 ? 'Strong' : n >= 75 ? 'Solid' : 'Familiar';
const LEVEL_COLOR = (n) => n >= 85 ? 'fill-purple' : n >= 75 ? 'fill-blue' : 'fill-gray';

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
          {skillCategories.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon];
            return (
              <div
                key={cat.title}
                className={`skills__wrapper-card reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'visible' : ''}`}
              >
                <div className="skills__cat-header">
                  {Icon && <Icon size={18} className="skills__cat-icon" />}
                  <h3 className="skills__cat-title">{cat.title}</h3>
                </div>

                <div className="skills__mini-grid">
                  {cat.skills.map(({ name, level }) => (
                    <div key={name} className="skills__mini-card">
                      <span className="skills__mc-name">{name}</span>
                      <div className="skills__mc-bar">
                        <div className={`skills__mc-fill ${LEVEL_COLOR(level)}`} style={{ width: `${level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        {/* Legend */}
        <div className={`skills__legend reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
          <div className="skills__legend-item">
            <div className="skills__legend-color fill-purple" /> Strong (Production-used)
          </div>
          <span className="skills__legend-sep" />
          <div className="skills__legend-item">
            <div className="skills__legend-color fill-blue" /> Solid (Multiple projects)
          </div>
          <span className="skills__legend-sep" />
          <div className="skills__legend-item">
            <div className="skills__legend-color fill-gray" /> Familiar (Working knowledge)
          </div>
        </div>
      </div>
    </section>
  );
}
