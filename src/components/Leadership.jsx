import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { leadership } from '../data/achievements';
import './Leadership.css';

const TYPE_TAG = {
  'Event Leadership': 'tag-blue',
  'External Relations': 'tag-purple',
  'Financial Management': 'tag-green',
  'Knowledge Sharing': 'tag-orange',
};

const FILTERS = ['All', 'Leadership', 'Communication or Lobbying', 'Bendahara atau Accounting', 'Public Speaking'];

export default function Leadership() {
  const [ref, isVisible] = useIntersectionObserver();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredExperience = activeFilter === 'All'
    ? leadership
    : leadership.filter(item => item.category === activeFilter);

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="label">Experience / Organization</p>
          <h2 className="section-title">Soft Skills</h2>
          <div className="divider" />
          <p className="section-sub">
            Engineering is a team sport. These roles shaped how I communicate,
            coordinate, and deliver under pressure.
          </p>
        </div>

        {/* Main Wrapper Card */}
        <div className={`lead__wrapper-card card reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
          {/* Filter Bar */}
          <div className="lead__filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`lead__filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="lead__grid">
          {filteredExperience.length > 0 ? (
            filteredExperience.map((item, i) => (
              <div
                key={item.id}
                className={`lead__card card reveal reveal-delay-${Math.min(i + 1, 4)} ${isVisible ? 'visible' : ''}`}
              >
                {item.image && (
                  <div className="lead__image-container">
                    <img src={item.image} alt={item.role} className="lead__image" />
                  </div>
                )}
                <div className="lead__content">
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
              </div>
            ))
          ) : (
            <div className="lead__empty">
              <p>No experiences added for this category yet.</p>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
