import { useMemo, useState } from "react";
import { news, type NewsItem } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import { SectionTitle } from "./SectionTitle";

const CATEGORY_LABELS: Record<NewsItem["category"], string> = {
  award: "Award",
  publication: "Publication",
  grant: "Grant",
  talk: "Talk",
  service: "Service",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function News() {
  const { ref, visible } = useInView();
  const [category, setCategory] = useState<NewsItem["category"] | "all">("all");

  const filtered = useMemo(() => {
    const list = [...news].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    if (category === "all") return list;
    return list.filter((n) => n.category === category);
  }, [category]);

  const categories = [...new Set(news.map((n) => n.category))];

  return (
    <section id="news" className="section news" ref={ref}>
      <div className={`container reveal ${visible ? "in-view" : ""}`}>
        <SectionTitle
          eyebrow="Updates"
          title="News"
          subtitle="Grants, publications, talks, and service."
        />

        <div className="news-filters">
          <button
            type="button"
            className={category === "all" ? "active" : ""}
            onClick={() => setCategory("all")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={category === cat ? "active" : ""}
              onClick={() => setCategory(cat)}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        <ul className="news-list">
          {filtered.map((item) => (
            <li key={item.id} className={`news-item news-${item.category}`}>
              <time dateTime={item.date}>{formatDate(item.date)}</time>
              <span className="news-category">{CATEGORY_LABELS[item.category]}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
