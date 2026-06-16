const clusters = [
  {
    id: 'cluster-1',
    title: 'Fuel prices set to rise as EPRA announces new pump rates',
    updatedAt: '2026-06-05T12:20:00+03:00',
    articles: [
      {
        id: 'article-101',
        sourceName: 'Nation',
        title: 'EPRA raises petrol prices by Ksh 7 effective midnight',
        summary: 'Motorists will pay more for petrol and diesel after the latest monthly review.',
        pubDate: '2026-06-05T12:12:00+03:00',
        url: '#',
      },
      {
        id: 'article-102',
        sourceName: 'Standard',
        title: 'Fuel costs increase for second consecutive month',
        summary: 'The new pump prices add pressure to transport and food costs.',
        pubDate: '2026-06-05T11:48:00+03:00',
        url: '#',
      },
      {
        id: 'article-103',
        sourceName: 'Kenyans',
        title: 'New fuel prices in Kenya from tonight',
        summary: 'The revised prices take effect at midnight across major towns.',
        pubDate: '2026-06-05T11:02:00+03:00',
        url: '#',
      },
    ],
  },
  {
    id: 'cluster-2',
    title: 'President addresses Parliament on economic recovery plan',
    updatedAt: '2026-06-05T10:15:00+03:00',
    articles: [
      {
        id: 'article-201',
        sourceName: 'Nation',
        title: 'President lays out five-point economic plan before MPs',
        summary: 'The address focused on job creation, public debt, and tax compliance.',
        pubDate: '2026-06-05T10:13:00+03:00',
        url: '#',
      },
      {
        id: 'article-202',
        sourceName: 'Nation',
        title: 'State House outlines job creation agenda in address',
        summary: 'Officials say new measures target youth employment and investment.',
        pubDate: '2026-06-05T09:35:00+03:00',
        url: '#',
      },
    ],
  },
  {
    id: 'cluster-3',
    title: 'Kenya Revenue Authority warns of new tax compliance deadline',
    updatedAt: '2026-06-05T12:05:00+03:00',
    articles: [
      {
        id: 'article-301',
        sourceName: 'Kenyans',
        title: 'KRA reminds taxpayers of June 30 filing deadline',
        summary:
          'KRA says late filings will attract penalties and urges taxpayers to complete returns early through the online portal.',
        pubDate: '2026-06-05T12:05:00+03:00',
        url: '#',
      },
    ],
  },
  {
    id: 'cluster-4',
    title: 'Nairobi Expressway records highest traffic volumes since opening',
    updatedAt: '2026-06-05T08:10:00+03:00',
    articles: [
      {
        id: 'article-401',
        sourceName: 'Standard',
        title: 'Expressway usage surges as CBD traffic worsens',
        summary: 'Operators report increased trips during morning and evening peak hours.',
        pubDate: '2026-06-05T08:10:00+03:00',
        url: '#',
      },
    ],
  },
]

export function getClusters() {
  return clusters
}

export function sortByDateDesc(items, getDate) {
  return [...items].sort((a, b) => new Date(getDate(b)).getTime() - new Date(getDate(a)).getTime())
}

export function getSourceSummary(cluster) {
  const uniqueSources = [...new Set(cluster.articles.map((article) => article.sourceName).filter(Boolean))]
  if (uniqueSources.length > 1) return `${uniqueSources.length} sources`
  return uniqueSources[0] || 'Unknown source'
}
