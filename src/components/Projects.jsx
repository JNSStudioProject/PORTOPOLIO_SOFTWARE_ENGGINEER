import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <div className={`projects__header reveal ${isVisible ? 'visible' : ''}`}>
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Engineering work with{' '}
            <span className="gradient-text">real-world impact</span>
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Each project below is documented as an engineering case study.
            Click <strong>&quot;Read case study&quot;</strong> to see the full breakdown:
            problem context, technical decisions, my role, and measurable outcomes.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${isVisible ? 'visible' : ''}`}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
