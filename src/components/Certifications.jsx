import { Award, Cloud, Monitor, Database, FileText, Shield, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { certifications } from '../data/certifications';
import './Certifications.css';

const ICONS = { Award, Cloud, Monitor, Database, FileText, Shield, Globe };

export default function Certifications() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="certifications" className="cert" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="label">Continuous Learning</p>
          <h2 className="section-title">Certifications</h2>
          <div className="divider" />
        </div>

        <div className="cert__grid">
          {certifications.map((item, i) => {
            const Icon = ICONS[item.icon] || Award;
            return (
              <div
                key={item.id}
                className={`cert__item card reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'visible' : ''}`}
                style={{ '--ac': item.color }}
              >
                <div className="cert__icon-wrap">
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <div className="cert__body">
                  <div className="cert__top">
                    <span className="tag tag-gray cert__year">{item.year}</span>
                  </div>
                  <p className="cert__title">{item.title}</p>
                  <p className="cert__issuer">{item.issuer}</p>
                  {item.credentialId && (
                    <p className="cert__desc">Credential ID: {item.credentialId}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
