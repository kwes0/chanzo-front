import { sortByDateDesc } from "../api/clustersApi";
import SingleArticleCard from "../components/clusters/SingleArticleCard";
import { useNews } from "../hooks/NewsContext";

export default function SingleArticlesPage() {
  const { clusters } = useNews();
  const singleArticleClusters = sortByDateDesc(
    clusters.filter((cluster) => cluster.articles.length === 1),
    (cluster) => cluster.articles[0]?.pubDate || cluster.updatedAt,
  );

  return (
    <main className="mx-auto max-w-[980px] border-x border-rule bg-cream">
      <div className="flex flex-col items-start justify-between gap-1 border-b border-rule px-4 py-3 md:flex-row md:items-baseline md:px-5">
        <h1 className="font-display text-lg font-semibold text-ink">
          Today's Single Article Clusters
        </h1>
        <div className="font-mono text-[9px] tracking-[0.04em] text-ink-4">
          {singleArticleClusters.length} articles 
        </div>
      </div>

      {singleArticleClusters.length > 0 ? (
        singleArticleClusters.map((cluster) => (
          <SingleArticleCard cluster={cluster} key={cluster.id} />
        ))
      ) : (
        <div className="px-5 py-9 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-4">
          No single article clusters yet
        </div>
      )}
    </main>
  );
}
