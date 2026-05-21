import { useState } from 'react';
import {
  ChevronDown, ChevronUp,
  HelpCircle, Settings, Layout, TrendingUp, CheckCircle2
} from 'lucide-react';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
import './ProjectCard.css';

const FRAMEWORK_ICONS = {
  why: HelpCircle,
  how: Settings,
  what: Layout,
  effect: TrendingUp
};

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  const {
    title, tagline, category, status, why, how, what, effect,
    stack, color, github
  } = project;

  return (
    <article
      className={`proj-card card reveal reveal-delay-${Math.min(index + 1, 5)}`}
      style={{ '--proj-color': color }}
    >
      {/* Header */}
      <div className="proj-card__header">
        <div className="proj-card__meta">
          <span className="proj-card__category badge">{category}</span>
          <span className={`proj-card__status ${status === 'Completed' ? 'proj-card__status--done' : ''}`}>
            <span className="proj-card__status-dot" />
            {status}
          </span>
        </div>
        <h3 className="proj-card__title">{title}</h3>
        <p className="proj-card__tagline">{tagline}</p>

        {/* Stack badges */}
        <div className="proj-card__stack">
          {stack.map((tech) => (
            <span key={tech} className="proj-card__tech">{tech}</span>
          ))}
        </div>
      </div>

      {/* WHY — always visible */}
      <div className="proj-card__section proj-card__section--why">
        <div className="proj-card__section-icon">
          <HelpCircle size={14} />
          <span>WHY</span>
        </div>
        <p className="proj-card__section-headline">{why.headline}</p>
        <p className="proj-card__section-body">{why.body}</p>
      </div>

      {/* Expandable: HOW / WHAT / EFFECT */}
      <div className={`proj-card__expandable ${expanded ? 'proj-card__expandable--open' : ''}`}>
        {/* HOW */}
        <div className="proj-card__section">
          <div className="proj-card__section-icon">
            <Settings size={14} />
            <span>HOW</span>
          </div>
          <p className="proj-card__section-headline">{how.headline}</p>
          <p className="proj-card__section-body">{how.body}</p>
        </div>

        {/* WHAT */}
        <div className="proj-card__section">
          <div className="proj-card__section-icon">
            <Layout size={14} />
            <span>WHAT</span>
          </div>
          <p className="proj-card__section-headline">{what.headline}</p>
          <ul className="proj-card__features">
            {what.features.map((f) => (
              <li key={f}>
                <CheckCircle2 size={13} className="proj-card__check" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="proj-card__role">
            <span className="proj-card__role-label">My Role: </span>
            {what.role}
          </div>
        </div>

        {/* EFFECT */}
        <div className="proj-card__section proj-card__section--effect">
          <div className="proj-card__section-icon">
            <TrendingUp size={14} />
            <span>EFFECT</span>
          </div>
          <p className="proj-card__section-headline">{effect.headline}</p>
          <ul className="proj-card__results">
            {effect.results.map((r) => (
              <li key={r}>
                <span className="proj-card__result-dot" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="proj-card__footer">
        <button
          className="proj-card__toggle"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? (
            <><ChevronUp size={15} /> Show less</>
          ) : (
            <><ChevronDown size={15} /> Read case study</>
          )}
        </button>

        <div className="proj-card__links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-card__link"
            aria-label={`${title} GitHub repository`}
          >
            <GithubIcon size={16} />
            <span>Code</span>
          </a>
        </div>
      </div>
    </article>
  );
}
