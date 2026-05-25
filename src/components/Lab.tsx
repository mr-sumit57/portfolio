import { labMembers } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./SectionTitle";

const INITIALS_COLORS = [
  "#1a3a4a",
  "#2d5a6b",
  "#4a7c8f",
  "#6b9aaa",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Lab() {
  const { ref, visible } = useInView();

  return (
    <section id="lab" className="section lab" ref={ref}>
      <div className={`container reveal ${visible ? "in-view" : ""}`}>
        <SectionTitle
          eyebrow="Trustworthy ML Lab"
          title="People"
          subtitle="Prospective students: email with CV and research interests."
        />
        <div className="lab-grid">
          <div className="lab-lead card-accent">
            <div className="member-avatar lead">EV</div>
            <div>
              <h3>Dr. Elena M. Vasquez</h3>
              <p className="member-role">Principal Investigator · Assistant Professor</p>
              <p className="member-focus">
                Trustworthy ML, causal inference, climate & health applications
              </p>
            </div>
          </div>
          {labMembers.map((member, i) => (
            <article key={i} className="lab-member">
              <div
                className="member-avatar"
                style={{ background: INITIALS_COLORS[i % INITIALS_COLORS.length] }}
              >
                {getInitials(member.name)}
              </div>
              <div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-focus">{member.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
