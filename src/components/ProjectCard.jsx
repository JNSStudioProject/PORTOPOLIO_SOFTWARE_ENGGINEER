import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, TrendingUp } from 'lucide-react';
import './ProjectCard.css';

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const { title, tagline, why, how, what, effect, stack, color, github } = project;

  return (
    <article className="pcard card" style={{ '--pcolor': color }}>
      {/* Color bar */}
      <div className="pcard__bar" />

      {/* Header */}
      <div className="pcard__head">
        <div className="pcard__meta">
          <span className="tag tag-green pcard__status">✓ Completed</span>
          <div className="pcard__stack">
            {stack.slice(0, 4).map(t => (
              <span key={t} className="tag tag-gray">{t}</span>
            ))}
            {stack.length > 4 && <span className="tag tag-gray">+{stack.length - 4}</span>}
          </div>
        </div>
        <h3 className="pcard__title">{title}</h3>
        <p className="pcard__tagline">{tagline}</p>
      </div>

      {/* WHY — always visible */}
      <div className="pcard__why">
        <span className="pcard__frame-label">WHY</span>
        <p className="pcard__why-headline">{why.headline}</p>
        <p className="pcard__why-body">{why.body}</p>
      </div>

      {/* Expandable */}
      <div className={`pcard__expand ${open ? 'pcard__expand--open' : ''}`}>
        {/* HOW */}
        <div className="pcard__block">
          <span className="pcard__frame-label pcard__frame-label--blue">HOW</span>
          <p className="pcard__block-title">{how.headline}</p>
          <p className="pcard__block-body">{how.body}</p>
        </div>

        {/* WHAT */}
        <div className="pcard__block">
          <span className="pcard__frame-label pcard__frame-label--orange">WHAT</span>
          <p className="pcard__block-title">{what.headline}</p>
          <ul className="pcard__features">
            {what.features.map((f) => (
              <li key={f}>
                <CheckCircle2 size={12} className="pcard__check" />
                {f}
              </li>
            ))}
          </ul>
          <div className="pcard__role">
            <strong>My role:</strong> {what.role}
          </div>
        </div>

        {/* EFFECT */}
        <div className="pcard__block pcard__block--effect">
          <span className="pcard__frame-label pcard__frame-label--green">EFFECT</span>
          <p className="pcard__block-title">
            <TrendingUp size={13} /> {effect.headline}
          </p>
          <ul className="pcard__results">
            {effect.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="pcard__footer">
        <button className="pcard__toggle" onClick={() => setOpen(!open)}>
          {open ? <><ChevronUp size={14} /> Collapse</> : <><ChevronDown size={14} /> Read case study</>}
        </button>
        <a href={github} target="_blank" rel="noopener noreferrer" className="pcard__gh">
          <GithubIcon /> Code
        </a>
      </div>
    </article>
  );
}
