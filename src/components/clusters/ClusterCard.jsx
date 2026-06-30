import { getSourceSummary, sortByDateDesc } from "../../api/clustersApi";
import { useNews } from "../../hooks/NewsContext";
import ClusterArticleRow from "./ClusterArticleRow";

export default function ClusterCard({ cluster }) {
  const { openClusterIds, toggleCluster } = useNews();
  const isOpen = openClusterIds.has(cluster.id); //this is why it is not working as expected
  const articles = sortByDateDesc(
    cluster.articles,
    (article) => article.pubDate,
  );

  return (
    <article className="border-b border-rule">
      <button
        className="block w-full px-4 py-4 text-left transition hover:bg-cream-2 md:px-5 md:py-[18px]"
        onClick={() => toggleCluster(cluster.id)}
        type="button"
      >
        <div className="mb-1.5 flex flex-wrap items-center gap-2 font-mono text-[8.5px] tracking-[0.04em] text-ink-4">
          <span>{getSourceSummary(cluster)}</span>
          <span className="text-rule-2">.</span>
          <span>created {formatRelativeDate(cluster.createdAt)}</span>
          <span className="text-rule-2">-</span>
          <span>updated {formatRelativeDate(articles[0].pubDate)}</span>
        </div>
        <h2 className="mb-2.5 font-display text-xl font-semibold leading-tight tracking-normal text-ink md:text-[23px]">
          {cluster.title}
        </h2>
        <div className="flex items-center gap-1 font-mono text-[8.5px] uppercase tracking-[0.06em] text-ink-4">
          <span
            className={`inline-block transition ${isOpen ? "rotate-180" : ""}`}
          >
            ⌄
          </span>
          <span>
            {isOpen ? "collapse" : `show articles (${cluster.articles.length})`}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-rule bg-cream-2">
          {articles.map((article) => (
            <ClusterArticleRow article={article} key={article.id} />
          ))}
        </div>
      )}
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
