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
          <h2 className="section-title">What I&apos;ve built</h2>
          <div className="divider" />
          <p className="section-sub">
            Three completed projects. Each is documented as an engineering case study using the{' '}
            <strong>WHY / HOW / WHAT / EFFECT</strong> framework.
            Hit <em>&ldquo;Read case study&rdquo;</em> to see the full breakdown.
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
