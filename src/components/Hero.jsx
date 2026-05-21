import { useEffect, useState } from 'react';
import { ArrowDown, Mail, ChevronRight } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import './Hero.css';

const TITLES = [
  'Backend Developer',
  'Software Engineer',
  'Full-Stack Developer',
  'Laravel Specialist'
];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIdx]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Background elements */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__content">
        {/* Status badge */}
        <div className="hero__badge animate-fade-up animate-fade-up-delay-1">
          <span className="hero__badge-dot" />
          <span>Open to Software Engineer Internships</span>
        </div>

        {/* Main heading */}
        <h1 className="hero__name animate-fade-up animate-fade-up-delay-2">
          Muhammad Juna Nasri
        </h1>

        {/* Typewriter title */}
        <div className="hero__title animate-fade-up animate-fade-up-delay-2">
          <span className="hero__title-prefix">I&apos;m a </span>
          <span className="hero__title-typed gradient-text">{displayed}</span>
          <span className="hero__cursor" />
        </div>

        {/* Value proposition */}
        <p className="hero__tagline animate-fade-up animate-fade-up-delay-3">
          Semester 6 Informatics Engineering student at Politeknik Caltex Riau
          with a <strong>3.99 GPA</strong>. I build backend systems and web applications
          that solve real problems — from MSME e-commerce platforms to
          AI-powered mobile apps with 97% detection accuracy.
        </p>

        {/* CTAs */}
        <div className="hero__ctas animate-fade-up animate-fade-up-delay-4">
          <button className="btn btn-primary hero__cta-primary" onClick={scrollToProjects}>
            View Projects <ChevronRight size={16} />
          </button>
          <a
            href="/CV_Muhammad_Juna_Nasri.pdf"
            className="btn btn-secondary"
            download
          >
            Download CV
          </a>
          <button className="btn btn-ghost" onClick={scrollToContact}>
            Contact Me <Mail size={16} />
          </button>
        </div>

        {/* Social links */}
        <div className="hero__socials animate-fade-up animate-fade-up-delay-4">
          <a
            href="https://github.com/JNSStudioProject"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-juna-nasri"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:muhammadj.nasri@gmail.com"
            className="hero__social-link"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats animate-fade-up animate-fade-up-delay-4">
          <div className="hero__stat">
            <span className="hero__stat-value gradient-text">3.99</span>
            <span className="hero__stat-label">GPA / 4.00</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value gradient-text">3+</span>
            <span className="hero__stat-label">Completed Projects</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value gradient-text">2×</span>
            <span className="hero__stat-label">Competition Winner</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value gradient-text">Int&apos;l</span>
            <span className="hero__stat-label">Exchange Student</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero__scroll"
        onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
