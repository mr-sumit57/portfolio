import { grants, researchAreas } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./SectionTitle";

export function Research() {
  const { ref, visible } = useInView();

  return (
    <section id="research" className="section research" ref={ref}>
      <div className={`container reveal ${visible ? "in-view" : ""}`}>
        <SectionTitle
          eyebrow="Scholarship"
          title="Research"
          subtitle="Interdisciplinary work at the frontier of trustworthy AI."
        />
        <div className="research-grid">
          {researchAreas.map((area, i) => (
            <article key={i} className="research-card">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul className="tags">
                {area.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grants-block">
          <h3>Active Funding</h3>
          <div className="grants-list">
            {grants.map((grant, i) => (
              <div key={i} className="grant-item">
                <div className="grant-header">
                  <strong>{grant.title}</strong>
                  <span className="grant-role">{grant.role}</span>
                </div>
                <p>
                  {grant.agency} · {grant.amount} · {grant.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
