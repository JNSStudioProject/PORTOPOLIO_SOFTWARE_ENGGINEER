import { Mail, Send, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Contact.css';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const WaIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2 22l5.119-1.338A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 12 2zm0 18c-1.721 0-3.32-.46-4.69-1.27l-.334-.196-3.04.796.81-2.963-.218-.348A7.936 7.936 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
  </svg>
);

const LINKS = [
  { Icon: Mail, label: 'Email', value: 'muhammadj.nasri@gmail.com', href: 'mailto:muhammadj.nasri@gmail.com', note: 'Responds within 24h' },
  { Icon: GithubIcon, label: 'GitHub', value: 'JNSStudioProject', href: 'https://github.com/JNSStudioProject', note: 'View code & repos' },
  { Icon: LinkedinIcon, label: 'LinkedIn', value: 'muhammad-juna-nasri', href: 'https://linkedin.com/in/muhammad-juna-nasri', note: 'Professional profile' },
  { Icon: WaIcon, label: 'WhatsApp', value: '+62 xxx-xxxx-xxxx', href: 'https://wa.me/62', note: 'Quick coordination' },
];

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="contact__inner">
          {/* Left */}
          <div className={`reveal ${isVisible ? 'visible' : ''}`}>
            <p className="label">Contact</p>
            <h2 className="section-title">
              Let&apos;s talk about<br />
              <span className="accent">your next project</span>
            </h2>
            <div className="divider" />
            <p className="contact__body">
              I&apos;m actively looking for <strong>SE internship opportunities</strong> at
              Indonesian tech companies, IT consulting firms, and multinationals.
              If you have a role or want to connect — reach out.
            </p>
            <p className="contact__location">
              <MapPin size={13} />
              Pekanbaru, Riau · open to hybrid &amp; remote
            </p>
            <a href="mailto:muhammadj.nasri@gmail.com" className="btn btn-primary contact__cta">
              <Send size={15} /> Send Email
            </a>
          </div>

          {/* Right — links */}
          <div className="contact__links">
            {LINKS.map(({ Icon, label, value, href, note }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`contact__link card reveal reveal-delay-${i + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="contact__link-icon">
                  <Icon size={18} />
                </div>
                <div className="contact__link-info">
                  <p className="contact__link-label">{label}</p>
                  <p className="contact__link-value">{value}</p>
                </div>
                <span className="contact__link-note">{note}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
