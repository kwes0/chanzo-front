export default function ClusterArticleRow({ article }) {
  return (
    <a
      className="grid grid-cols-1 gap-1.5 border-b border-rule px-4 py-3 text-left transition last:border-b-0 hover:bg-cream-3 sm:grid-cols-[86px_1fr_92px_18px] sm:items-center sm:gap-3 sm:px-5 sm:pl-[90px]"
      href={article.link} target="_blank"
    >
      <span className="w-fit rounded-[2px] border border-rule-2 bg-cream-3 px-2 py-0.5 text-center font-mono text-[8px] font-medium uppercase tracking-[0.06em] text-ink-2">
        {article.sourceName || 'Source'}
      </span>
      <span className="text-[12.5px] leading-snug text-ink-2">{article.title}</span>
      <span className="font-mono text-[8.5px] text-ink-4 sm:text-right">{formatRelativeDate(article.pubDate)}</span>
      <span className="text-ink-4">↗</span>
    </a>
  )
}

function formatRelativeDate(dateText) {
  const value = new Date(dateText)
  const diffMs = Date.now() - value.getTime()
  const diffMinutes = Math.max(1, Math.round(diffMs / 60000))
  if (diffMinutes < 60) return `${diffMinutes}m ago`
  const diffHours = Math.round(diffMinutes / 60)
  if (diffHours < 24) return `${diffHours}h ago`
  return value.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}
