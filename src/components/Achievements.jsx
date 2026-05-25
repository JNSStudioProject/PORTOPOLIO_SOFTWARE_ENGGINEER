import { Trophy, Shield, Award, Globe, BookOpen } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { achievements } from '../data/achievements';
import './Achievements.css';

const ICONS = { Trophy, Shield, Award, Globe, BookOpen };
const TAG_MAP = { '#f59e0b': 'tag-blue', '#3b82f6': 'tag-blue', '#10b981': 'tag-green', '#8b5cf6': 'tag-purple', '#06b6d4': 'tag-blue' };

export default function Achievements() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="achievements" className="ach" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="label">Recognition</p>
          <h2 className="section-title">Achievement</h2>
          <div className="divider" />
        </div>

        <div className="ach__grid">
          {achievements.map((item, i) => {
            const Icon = ICONS[item.icon] || Trophy;
            return (
              <div
                key={item.id}
                className={`ach__item card reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'visible' : ''}`}
                style={{ '--ac': item.color }}
              >
                <div className="ach__icon-wrap">
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <div className="ach__body">
                  <div className="ach__top">
                    <span className="tag tag-gray ach__year">{item.year}</span>
                  </div>
                  <p className="ach__title">{item.title}</p>
                  <p className="ach__org">{item.org}</p>
                  <p className="ach__desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
