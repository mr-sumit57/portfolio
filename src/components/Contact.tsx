import { FormEvent, useState } from "react";
import { profile } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./SectionTitle";

export function Contact() {
  const { ref, visible } = useInView();
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = encodeURIComponent(
      `From: ${name} <${email}>\n\n${message}`
    );
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className={`container reveal ${visible ? "in-view" : ""}`}>
        <SectionTitle
          eyebrow="Get in Touch"
          title="Contact"
          subtitle="Collaborations, speaking invitations, and student inquiries welcome."
        />

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Email</h3>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-card">
              <h3>Office</h3>
              <p>{profile.office}</p>
              <p>{profile.university}</p>
            </div>
            <div className="contact-card">
              <h3>Phone</h3>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
            </div>
            <label>
              Subject
              <input
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </label>
            <label>
              Message
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {status === "sent" && (
              <p className="form-success" role="status">
                Your mail client should open with a draft — send when ready.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
