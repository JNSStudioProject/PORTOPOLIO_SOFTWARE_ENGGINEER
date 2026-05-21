import { Code2, Server, Monitor, Database, Wrench, GitBranch } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skillCategories } from '../data/skills';
import './Skills.css';

const ICONS = { Code2, Server, Monitor, Database, Wrench, GitBranch };

function SkillBar({ name, level, isVisible }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: isVisible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ title, icon, skills, isVisible, delay }) {
  const Icon = ICONS[icon] || Code2;
  return (
    <div className={`skill-card card reveal reveal-delay-${delay} ${isVisible ? 'visible' : ''}`}>
      <div className="skill-card__header">
        <div className="skill-card__icon">
          <Icon size={18} />
        </div>
        <h3 className="skill-card__title">{title}</h3>
      </div>
      <div className="skill-card__skills">
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="skills__header">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">
            Tools I build <span className="gradient-text">real things</span> with
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Focused on backend and full-stack development. Every skill listed here
            has been applied in a real project — not just classroom exercises.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <SkillCategory
              key={cat.title}
              {...cat}
              isVisible={isVisible}
              delay={Math.min(i + 1, 5)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
