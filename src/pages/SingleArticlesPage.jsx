import { sortByDateDesc } from "../api/clustersApi";
import SingleArticleCard from "../components/clusters/SingleArticleCard";
import LoadingIcon from "../components/layout/LoadingIcon";
import { useNews } from "../hooks/NewsContext";

function toKenyaDateString(date) {
  return date.toLocaleDateString("en-GB", { timeZone: "Africa/Nairobi" });
}

export default function SingleArticlesPage() {
  const { clusters, isLoading } = useNews();

  const todayInKenya = toKenyaDateString(new Date());

  const singleArticleClusters = clusters.filter(
    (cluster) => cluster.articles.length === 1,
  );

  const todaysSingleArticleClusters = sortByDateDesc(
    singleArticleClusters.filter((cluster) => {
      const pubDate = cluster.articles[0]?.pubDate;
      if (!pubDate) return false;
      return toKenyaDateString(new Date(pubDate)) === todayInKenya;
    }),
    (cluster) => cluster.articles[0]?.pubDate || cluster.updatedAt,
  );

  return (
    <main className="mx-auto max-w-[980px] border-x border-rule bg-cream">
      <div className="flex flex-col items-start justify-between gap-1 border-b border-rule px-4 py-3 md:flex-row md:items-baseline md:px-5">
        <h1 className="font-display text-lg font-semibold text-ink">
          Today's Articles
        </h1>
        <div className="font-mono text-[9px] tracking-[0.04em] text-ink-4">
          {todaysSingleArticleClusters.length} articles
        </div>
      </div>

      {isLoading ? (
        <LoadingIcon />
      ) : (
        <>
          {todaysSingleArticleClusters.length > 0 ? (
            todaysSingleArticleClusters.map((cluster) => (
              <SingleArticleCard cluster={cluster} key={cluster.id} />
            ))
          ) : (
            <div className="px-5 py-9 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-4">
              No single article clusters yet
            </div>
          )}
        </>
      )}
    </main>
  );
}
