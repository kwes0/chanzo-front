import { sortByDateDesc } from "../api/clustersApi";
import ClusterCard from "../components/clusters/ClusterCard";
import { useNews } from "../hooks/NewsContext";

export default function ClustersPage() {
  const { clusters } = useNews();
  const multiArticleClusters = sortByDateDesc(
    clusters.filter((cluster) => cluster.articles.length > 1),
    (cluster) => cluster.updatedAt,
  );

  return (
    <main className="mx-auto max-w-[980px] border-x border-rule bg-cream">
      <PageHeader
        count={multiArticleClusters.length}
        title="This week's Clusters"
        unit="clusters"
      />

      {multiArticleClusters.length > 0 ? (
        multiArticleClusters.map((cluster) => (
          <ClusterCard cluster={cluster} key={cluster.id} />
        ))
      ) : (
        <EmptyState>No multi-article clusters yet</EmptyState>
      )}
    </main>
  );
}

function PageHeader({ count, title, unit }) {
  return (
    <div className="flex flex-col items-start justify-between gap-1 border-b border-rule px-4 py-3 md:flex-row md:items-baseline md:px-5">
      <h1 className="font-display text-lg font-semibold text-ink">{title}</h1>
      <div className="font-mono text-[9px] tracking-[0.04em] text-ink-4">
        {count} {unit} 
      </div>
    </div>
  );
}

function EmptyState({ children }) {
  return (
    <div className="px-5 py-9 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-4">
      {children}
    </div>
  );
}
