import { useMemo, useState } from "react";
import { publications, type PublicationType } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./SectionTitle";

const TYPE_LABELS: Record<PublicationType, string> = {
  journal: "Journal",
  conference: "Conference",
  book: "Book",
  preprint: "Preprint",
};

export function Publications() {
  const { ref, visible } = useInView();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<PublicationType | "all">("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"year-desc" | "year-asc" | "title">("year-desc");

  const years = useMemo(
    () => [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a),
    []
  );

  const filtered = useMemo(() => {
    let list = [...publications];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.venue.toLowerCase().includes(q)
      );
    }

    if (typeFilter !== "all") list = list.filter((p) => p.type === typeFilter);
    if (yearFilter !== "all") list = list.filter((p) => p.year === Number(yearFilter));

    list.sort((a, b) => {
      if (sortBy === "year-desc") return b.year - a.year;
      if (sortBy === "year-asc") return a.year - b.year;
      return a.title.localeCompare(b.title);
    });

    return list;
  }, [search, typeFilter, yearFilter, sortBy]);

  const featured = publications.filter((p) => p.featured);

  return (
    <section
      id="publications"
      className="section publications"
      ref={ref}
    >
      <div className={`container reveal ${visible ? "in-view" : ""}`}>
        <SectionTitle
          eyebrow="Scholarly Output"
          title="Publications"
          subtitle={`${publications.length} works — search, filter, and sort dynamically.`}
        />

        {featured.length > 0 && (
          <div className="featured-pubs">
            <h3>Highlighted</h3>
            <div className="featured-grid">
              {featured.map((pub) => (
                <article key={pub.id} className="featured-card">
                  <span className="pub-type">{TYPE_LABELS[pub.type]}</span>
                  <h4>{pub.title}</h4>
                  <p className="pub-meta">
                    {pub.authors} — <em>{pub.venue}</em> ({pub.year})
                  </p>
                  {(pub.doi || pub.url) && (
                    <a
                      href={pub.url ?? `https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pub-link"
                    >
                      Read paper →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="pub-controls">
          <input
            type="search"
            placeholder="Search titles, authors, venues…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search publications"
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as PublicationType | "all")}
            aria-label="Filter by type"
          >
            <option value="all">All types</option>
            {(Object.keys(TYPE_LABELS) as PublicationType[]).map((t) => (
              <option key={t} value={t}>
                {TYPE_LABELS[t]}
              </option>
            ))}
          </select>
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            aria-label="Filter by year"
          >
            <option value="all">All years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            aria-label="Sort publications"
          >
            <option value="year-desc">Newest first</option>
            <option value="year-asc">Oldest first</option>
            <option value="title">Title A–Z</option>
          </select>
        </div>

        <p className="pub-count" aria-live="polite">
          Showing {filtered.length} of {publications.length} publications
        </p>

        <ol className="pub-list">
          {filtered.map((pub) => (
            <li key={pub.id} className="pub-item">
              <span className={`pub-badge pub-badge-${pub.type}`}>
                {TYPE_LABELS[pub.type]}
              </span>
              <div className="pub-body">
                <h4>{pub.title}</h4>
                <p className="pub-meta">
                  {pub.authors}. <em>{pub.venue}</em>, {pub.year}.
                </p>
                <div className="pub-actions">
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOI
                    </a>
                  )}
                  {pub.url && (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      PDF / Link
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        {filtered.length === 0 && (
          <p className="empty-state">No publications match your filters.</p>
        )}
      </div>
    </section>
  );
}
