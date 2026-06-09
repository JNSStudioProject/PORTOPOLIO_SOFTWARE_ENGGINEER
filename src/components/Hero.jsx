import { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import profileImg from '../assets/profile.png';
import './Hero.css';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TITLES = ['Software Engineer', 'Data Engineer', 'Backend Developer', 'Network Enthusiast'];

const STATS = [
  { value: '3.99', label: 'GPA', sub: '/ 4.00 · Cum Laude' },
  { value: 'X', label: 'Projects', sub: 'Shipped & working' },
  { value: '1st', label: 'Place', sub: 'Web Competition 2024' },
  { value: '🇲🇾', label: 'Exchange', sub: 'Politeknik Mersing Johor,Malaysia' },
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[idx];
    let t;
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), 75);
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIdx((p) => (p + 1) % TITLES.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        {/* Left content */}
        <div className="hero__content">

          {/* Name */}
          <h1 className="hero__name anim-2">
            Jessica<br />Nathania
          </h1>

          {/* Typewriter */}
          <p className="hero__role anim-3">
            <span className="hero__role-text">{text}</span>
            <span className="hero__cursor" />
          </p>

          {/* Value prop */}
          <p className="hero__bio anim-4">
            Semester 6, Informatics Engineering · Politeknik Caltex Riau.
            I build backend systems, explore Data Engineering, and have a solid 
            understanding of basic networking — solving real problems, not just assignments.
          </p>

          {/* Location */}
          <p className="hero__location anim-4">
            <MapPin size={13} />
            Pekanbaru, Riau · Open to hybrid &amp; remote
          </p>

          {/* CTAs */}
          <div className="hero__ctas anim-5">
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See My Work <ArrowRight size={15} />
            </button>
            <a href="/CV_Jessica_Nathania_ATS.pdf" className="btn btn-outline" download>
              <Download size={15} /> Download CV
            </a>
          </div>

          {/* Social */}
          <div className="hero__socials anim-5">
            <a href="mailto:nathaniajessica39@gmail.com" className="hero__social" aria-label="Email">
              <Mail size={17} />
              <span>Email Me</span>
            </a>
            <a href="https://github.com/JNSStudioProject" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="GitHub">
              <GithubIcon size={17} />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/jessica-nathania" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="LinkedIn">
              <LinkedinIcon size={17} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right — Profile Image */}
        <div className="hero__right anim-4">
          <div className="hero__profile-large">
            <img src={profileImg} alt="Jessica Nathania" />
          </div>
        </div>
      </div>
    </section>
  );
}
