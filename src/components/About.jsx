import { GraduationCap, Globe, Star, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './About.css';

const FACTS = [
  { icon: GraduationCap, label: 'GPA 3.99 / 4.00', sub: 'Cum Laude — Politeknik Caltex Riau', color: 'purple' },
  { icon: Globe, label: 'International Exchange', sub: 'Politeknik Mersing Johor, Malaysia 2024', color: 'blue' },
  { icon: Star, label: 'Regional Scholarship', sub: 'Riau Government Academic Excellence', color: 'orange' },
  { icon: MapPin, label: 'Pekanbaru, Riau', sub: 'Open to hybrid & remote roles', color: 'green' },
];

export default function About() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          {/* Text */}
          <div className={`reveal ${isVisible ? 'visible' : ''}`}>
            <p className="label">About Me</p>
            <h2 className="section-title">I build things that <span className="accent">actually work</span></h2>
            <div className="divider" />

            <div className="about__paragraphs">
              <p>
                I&apos;m a final-semester Informatics Engineering student with a sharp focus on
                backend development. My interest isn&apos;t just academic — I build real systems,
                from an MSME e-commerce platform that won a regional competition to
                an Android app with 97% detection accuracy.
              </p>
              <p>
                I take ownership of what I build — not just the happy path,
                but edge cases, clean architecture, and maintainability too.
                I&apos;ve also led teams of 30+ people, which means I can communicate
                technical decisions clearly and coordinate without friction.
              </p>
              <p>
                Looking for a team where I can contribute fast and keep growing.
                I respond to emails within 24 hours.
              </p>
            </div>

            <div className="about__tags">
              {['Backend-Focused', 'Fast Learner', 'Initiative-Taker', 'Team Player', 'Problem Solver'].map(t => (
                <span key={t} className="tag tag-gray">{t}</span>
              ))}
            </div>
          </div>

          {/* Facts */}
          <div className="about__facts">
            {FACTS.map(({ icon: Icon, label, sub, color }, i) => (
              <div key={label} className={`about__fact card reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
                <div className={`about__fact-icon about__fact-icon--${color}`}>
                  <Icon size={17} />
                </div>
                <div>
                  <p className="about__fact-label">{label}</p>
                  <p className="about__fact-sub">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
