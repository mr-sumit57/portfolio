import { courses } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./SectionTitle";

export function Teaching() {
  const { ref, visible } = useInView();

  return (
    <section id="teaching" className="section teaching" ref={ref}>
      <div className={`container reveal ${visible ? "in-view" : ""}`}>
        <SectionTitle
          eyebrow="Instruction"
          title="Teaching"
          subtitle="Courses taught at State University of Technology."
        />
        <div className="courses-grid">
          {courses.map((course, i) => (
            <article key={i} className="course-card">
              <div className="course-header">
                <span className="course-code">{course.code}</span>
                <span className="course-term">{course.term}</span>
              </div>
              <h3>{course.title}</h3>
              <span className="course-level">{course.level}</span>
              <p>{course.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
