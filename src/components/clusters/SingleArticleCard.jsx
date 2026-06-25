export default function SingleArticleCard({ cluster }) {
  const article = cluster.articles[0];

  return (
    <article className="border-b border-rule">
      <div className="block px-4 py-4 text-left transition hover:bg-cream-2 md:px-5 md:py-[18px]">
        <div className="mb-1.5 flex flex-wrap items-center gap-2 font-mono text-[8.5px] tracking-[0.04em] text-ink-4">
          <span>{article.sourceName || "Unknown source"}</span>
          <span className="text-rule-2">.</span>
          <span>published {formatRelativeDate(article.pubDate)}</span>
        </div>
        <a
          className="text-blue hover:underline"
          href={article.link}
          target="_blank"
        >
          <h2 className="mb-2.5 font-display text-xl font-semibold leading-tight tracking-normal text-ink md:text-[23px]">
            {article.title || cluster.title}
          </h2>
        </a>


        <div className="mt-3 flex flex-wrap gap-2 font-mono text-[8.5px] uppercase tracking-[0.05em] text-ink-4">
          <span>Source: {article.sourceName || "Unknown"}</span>
          <span>
            | Published:{" "}
            {new Date(article.pubDate).toLocaleString("en-GB", {
              day: "numeric",
              month: "short",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          
        </div>
      </div>
    </article>
  );
}

function formatRelativeDate(dateText) {
  const value = new Date(dateText);
  const diffMs = Date.now() - value.getTime();
  const diffMinutes = Math.max(1, Math.round(diffMs / 60000));
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  const diffHours = Math.round(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  return value.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}
