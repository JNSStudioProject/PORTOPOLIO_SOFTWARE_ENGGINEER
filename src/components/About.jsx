import { MapPin, GraduationCap, Star, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './About.css';

const HIGHLIGHTS = [
  { icon: GraduationCap, label: 'GPA 3.99 / 4.00', sub: 'Cum Laude — Politeknik Caltex Riau' },
  { icon: Globe, label: 'International Exchange', sub: 'Politeknik Mersing Johor, Malaysia' },
  { icon: Star, label: 'Regional Scholarship', sub: 'Riau Government Academic Excellence' },
  { icon: MapPin, label: 'Pekanbaru, Riau', sub: 'Open to hybrid & remote roles' }
];

export default function About() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className={`about__inner ${isVisible ? 'visible' : ''}`}>
          {/* Left — text */}
          <div className="about__text">
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building software that{' '}
              <span className="gradient-text">makes a difference</span>
            </h2>
            <div className="divider" />

            <div className="about__paragraphs">
              <p>
                I&apos;m a final-semester Informatics Engineering student at Politeknik Caltex Riau
                with a strong focus on backend development and system architecture. My interest in
                software engineering isn&apos;t just academic — I actively build real systems, from
                MSME e-commerce platforms to AI-powered mobile applications with measurable results.
              </p>
              <p>
                What drives me is the engineering process itself: understanding a problem deeply,
                designing a clean solution, and delivering something that actually works in
                production. I take ownership of what I build — not just the happy path, but edge
                cases, performance, and maintainability too.
              </p>
              <p>
                Beyond coding, I&apos;ve led teams in organizational and event contexts, which has
                sharpened my ability to communicate technical decisions clearly, coordinate across
                different working styles, and follow through on commitments. I&apos;m looking for a
                team where I can contribute from day one and keep growing.
              </p>
            </div>

            <div className="about__tags">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Backend-Focused', 'Initiative-Taker'].map(tag => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right — highlights */}
          <div className="about__right">
            {/* Profile card */}
            <div className="about__profile-card card">
              <div className="about__avatar">
                <span className="about__avatar-initials">JN</span>
                <div className="about__avatar-ring" />
              </div>
              <div className="about__profile-info">
                <h3>Muhammad Juna Nasri</h3>
                <p className="about__profile-title">Software Engineer · Semester 6</p>
                <p className="about__profile-org">Politeknik Caltex Riau</p>
              </div>
              <div className="about__profile-status">
                <span className="hero__badge-dot" style={{ width: 8, height: 8, flexShrink: 0 }} />
                <span>Seeking Paid Internship · 2025</span>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="about__highlights">
              {HIGHLIGHTS.map(({ icon: Icon, label, sub }, i) => (
                <div key={label} className={`about__highlight card reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
                  <div className="about__highlight-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="about__highlight-label">{label}</p>
                    <p className="about__highlight-sub">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
