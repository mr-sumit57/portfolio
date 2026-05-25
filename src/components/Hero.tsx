import { profile } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export function Hero() {
  const { ref, visible } = useInView();

  return (
    <section id="home" className="hero" ref={ref}>
      <div className={`hero-content container ${visible ? "in-view" : ""}`}>
        <div className="hero-text">
          <p className="hero-eyebrow">{profile.department}</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">
            {profile.title} · {profile.university}
          </p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a href="#publications" className="btn btn-primary">
              View Publications
            </a>
            <a href={profile.cvUrl} className="btn btn-outline" download>
              Download CV
            </a>
          </div>
          <div className="hero-links">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={profile.image} alt={profile.name} className="hero-image" />
          <div className="hero-image-accent" aria-hidden />
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to about section">
        <span>Explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}
