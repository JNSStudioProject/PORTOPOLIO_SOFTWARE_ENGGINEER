import { Trophy, Shield, Award, Globe, BookOpen } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { achievements } from '../data/achievements';
import './Achievements.css';

const ICONS = { Trophy, Shield, Award, Globe, BookOpen };

export default function Achievements() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="achievements" className="achievements" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">Achievements</p>
          <h2 className="section-title">
            Recognized for <span className="gradient-text">excellence</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Competition wins, academic honors, and opportunities earned through
            consistent performance — not just classroom participation.
          </p>
        </div>

        <div className="achievements__grid">
          {achievements.map((item, i) => {
            const Icon = ICONS[item.icon] || Trophy;
            return (
              <div
                key={item.id}
                className={`achievement-card card reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'visible' : ''}`}
                style={{ '--ach-color': item.color }}
              >
                <div className="achievement-card__icon">
                  <Icon size={22} />
                </div>
                <div className="achievement-card__content">
                  <h3 className="achievement-card__title">{item.title}</h3>
                  <p className="achievement-card__org">{item.org}</p>
                  <p className="achievement-card__year">{item.year}</p>
                  <p className="achievement-card__desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
