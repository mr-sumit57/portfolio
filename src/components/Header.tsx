import { useState } from "react";
import { navItems, profile } from "../data/portfolio";

interface HeaderProps {
  activeSection: string;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export function Header({ activeSection, theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner container">
        <button
          type="button"
          className="logo"
          onClick={() => scrollTo("home")}
          aria-label="Scroll to top"
        >
          <span className="logo-mark">SK</span>
          <span className="logo-text">{profile.name.split(" ").slice(-2).join(" ")}</span>
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main">
          <ul>
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <button
                  type="button"
                  className={activeSection === id ? "active" : ""}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
