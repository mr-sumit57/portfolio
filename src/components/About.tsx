import { education, profile } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./SectionTitle";

export function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="section about" ref={ref}>
      <div className={`container reveal ${visible ? "in-view" : ""}`}>
        <SectionTitle eyebrow="Biography" title="About Me" />
        <div className="about-grid">
          <div className="about-bio">
            {profile.bio.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <aside className="about-sidebar">
            <h3>Education</h3>
            <ul className="timeline">
              {education.map((item, i) => (
                <li key={i} className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <strong>{item.degree}</strong>
                    <span>{item.institution}</span>
                    {item.detail && <em>{item.detail}</em>}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
