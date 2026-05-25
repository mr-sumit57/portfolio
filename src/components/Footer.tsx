import { profile } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="footer-affiliation">
          {profile.title}, {profile.department}, {profile.university}
        </p>
        <div className="footer-links">
          {profile.links.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
