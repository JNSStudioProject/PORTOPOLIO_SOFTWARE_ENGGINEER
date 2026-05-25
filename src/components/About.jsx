import { GraduationCap, Globe, Star, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './About.css';

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

          {/* Bento Box */}
          <div className={`about__bento reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            
            <div className="about__bento-card">
              <div className="about__bento-icon about__fact-icon--purple"><GraduationCap size={18} /></div>
              <p className="about__bento-title">GPA 3.99 / 4.00</p>
              <p className="about__bento-sub">Cum Laude — Politeknik Caltex Riau</p>
            </div>

            <div className="about__bento-card">
              <div className="about__bento-icon about__fact-icon--green"><MapPin size={18} /></div>
              <p className="about__bento-title">Pekanbaru, Riau</p>
              <p className="about__bento-sub">Hybrid &amp; Remote ready</p>
            </div>

            <div className="about__bento-card">
              <div className="about__bento-icon about__fact-icon--blue"><Globe size={18} /></div>
              <p className="about__bento-title">Intl. Exchange</p>
              <p className="about__bento-sub">Politeknik Mersing Johor</p>
            </div>

            <div className="about__bento-card">
              <div className="about__bento-icon about__fact-icon--orange"><Star size={18} /></div>
              <p className="about__bento-title">Scholarship</p>
              <p className="about__bento-sub">Riau Academic Excellence</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
