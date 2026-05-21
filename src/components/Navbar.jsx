import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollProgress, useActiveSection } from '../hooks/useIntersectionObserver';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' }
];

const SECTION_IDS = ['about', 'skills', 'projects', 'achievements', 'leadership', 'contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Progress bar */}
      <div className="nav-progress" style={{ width: `${progress}%` }} />

      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          {/* Logo */}
          <a
            href="#hero"
            className="navbar__logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          >
            JN
            <span className="navbar__logo-dot" />
          </a>

          {/* Desktop nav */}
          <ul className="navbar__links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`navbar__link ${active === href.slice(1) ? 'navbar__link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/CV_Muhammad_Juna_Nasri.pdf"
            className="btn btn-primary navbar__cta"
            download
          >
            Download CV
          </a>

          {/* Burger */}
          <button
            className="navbar__burger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
          <ul className="navbar__mobile-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`navbar__mobile-link ${active === href.slice(1) ? 'navbar__mobile-link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/CV_Muhammad_Juna_Nasri.pdf"
                className="btn btn-primary"
                download
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
