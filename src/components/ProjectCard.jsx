import { useState } from 'react';
import { TrendingUp, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import './ProjectCard.css';

const GithubIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);
  const { title, tagline, description, role, effect, stack, color, github, link, image } = project;

  return (
    <article className="pcard card" style={{ '--pcolor': color }}>
      {/* Color bar */}
      <div className="pcard__bar" />

      {/* Image */}
      {image && (
        <div className="pcard__image-container">
          <img src={image} alt={title} className="pcard__image" />
        </div>
      )}

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

      {/* Toggle Button */}
      <div className="pcard__toggle-container">
        <button 
          className="pcard__toggle-btn" 
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? (
            <><ChevronUp size={16} /> Hide Details</>
          ) : (
            <><ChevronDown size={16} /> Show Details</>
          )}
        </button>
      </div>

      {showDetails && (
        <>
          {/* Description */}
          <div className="pcard__desc">
        <p className="pcard__desc-text">{description}</p>
        <div className="pcard__role">
          <strong>Role:</strong> {role}
        </div>
      </div>

      {/* Effect */}
      {effect && effect.length > 0 && (
        <div className="pcard__effect">
          <p className="pcard__block-title">
            <TrendingUp size={13} /> EFFECT
          </p>
          <ul className="pcard__results">
            {effect.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer */}
      <div className="pcard__footer">
        <div className="pcard__links">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="pcard__gh">
              <ExternalLink size={15} /> Live
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="pcard__gh">
              <GithubIcon /> Code
            </a>
          )}
        </div>
      </div>
        </>
      )}
    </article>
  );
}
