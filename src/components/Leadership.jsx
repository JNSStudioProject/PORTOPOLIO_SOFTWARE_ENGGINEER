import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { leadership } from '../data/achievements';
import './Leadership.css';

const TYPE_TAG = {
  'Event Leadership': 'tag-blue',
  'Division Leadership': 'tag-purple',
  'Organization Leadership': 'tag-green',
};

const CORE_SKILLS = [
  { label: 'Team Coordination', desc: 'Led 30+ member event committees end-to-end' },
  { label: 'Technical Communication', desc: 'Explains systems clearly to non-technical people' },
  { label: 'Accountability', desc: 'Owns deliverables from design to delivery' },
  { label: 'Initiative', desc: 'Starts R&D projects and training programs proactively' },
];

export default function Leadership() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="leadership" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="label">Leadership</p>
          <h2 className="section-title">Beyond the code</h2>
          <div className="divider" />
          <p className="section-sub">
            Engineering is a team sport. These roles shaped how I communicate,
            coordinate, and deliver under pressure.
          </p>
        </div>

        <div className="lead__grid">
          {leadership.map((item, i) => (
            <div
              key={item.id}
              className={`lead__card card reveal reveal-delay-${Math.min(i + 1, 4)} ${isVisible ? 'visible' : ''}`}
            >
              <div className="lead__top">
                <span className={`tag ${TYPE_TAG[item.type] || 'tag-gray'}`}>{item.type}</span>
                <span className="lead__period">{item.period}</span>
              </div>
              <p className="lead__role">{item.role}</p>
              <p className="lead__org">{item.org}</p>
              <ul className="lead__bullets">
                {item.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div className={`lead__soft reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
          <p className="lead__soft-title">Core working strengths</p>
          <div className="lead__soft-grid">
            {CORE_SKILLS.map(({ label, desc }) => (
              <div key={label} className="lead__skill">
                <p className="lead__skill-label">{label}</p>
                <p className="lead__skill-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
