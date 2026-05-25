import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <div className={`reveal ${isVisible ? 'visible' : ''}`}>
          <p className="label">Projects</p>
          <h2 className="section-title">Projects</h2>
          <div className="divider" />
          <p className="section-sub">
            Three completed projects highlighting full-stack, frontend, and mobile development.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div key={project.id} className={`reveal reveal-delay-${Math.min(i + 1, 3)} ${isVisible ? 'visible' : ''}`}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
