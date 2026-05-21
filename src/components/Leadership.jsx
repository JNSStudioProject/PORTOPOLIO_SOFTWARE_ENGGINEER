import { Users, Cpu, Shield } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { leadership } from '../data/achievements';
import './Leadership.css';

const ORG_ICONS = {
  'Event Leadership': Users,
  'Division Leadership': Cpu,
  'Organization Leadership': Shield
};

export default function Leadership() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="leadership" className="leadership" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">Leadership & Soft Skills</p>
          <h2 className="section-title">
            Beyond the code —{' '}
            <span className="gradient-text">leading and collaborating</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Engineering is a team sport. These experiences shaped how I communicate,
            coordinate, and deliver under pressure — skills I bring to every engineering team.
          </p>
        </div>

        <div className="leadership__grid">
          {leadership.map((item, i) => {
            const Icon = ORG_ICONS[item.type] || Users;
            return (
              <div
                key={item.id}
                className={`leadership-card card reveal reveal-delay-${Math.min(i + 1, 4)} ${isVisible ? 'visible' : ''}`}
              >
                <div className="leadership-card__top">
                  <div className="leadership-card__icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="badge leadership-card__type">{item.type}</span>
                  </div>
                </div>

                <div className="leadership-card__header">
                  <h3 className="leadership-card__role">{item.role}</h3>
                  <p className="leadership-card__org">{item.org}</p>
                  <p className="leadership-card__period">{item.period}</p>
                </div>

                <ul className="leadership-card__bullets">
                  {item.bullets.map((bullet, bi) => (
                    <li key={bi} className="leadership-card__bullet">
                      <span className="leadership-card__bullet-dot" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Soft skills signal */}
        <div className={`leadership__softskills reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <p className="leadership__softskills-label">Core Strengths</p>
          <div className="leadership__softskills-grid">
            {[
              { label: 'Team Coordination', desc: 'Led 30+ member committees across multiple tracks' },
              { label: 'Technical Communication', desc: 'Presents complex systems clearly to non-technical stakeholders' },
              { label: 'Accountability', desc: 'Owns deliverables end-to-end — design, build, and follow-through' },
              { label: 'Initiative', desc: 'Starts research projects and workshops without being asked' }
            ].map(({ label, desc }) => (
              <div key={label} className="leadership__softskill card">
                <h4 className="leadership__softskill-label">{label}</h4>
                <p className="leadership__softskill-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
