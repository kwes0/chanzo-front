import axios from "axios";

const remoteserver = import.meta.env.VITE_SERVER_URL;
const baseUrl = remoteserver;

const getThisWeeksClusters = async () => {
  const weekClusterEndpoint = `${baseUrl}/ropie/weeksClusters`;
  try {
    const response = await axios.get(weekClusterEndpoint);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error("Kuna error kwa kuget clusters: ", e.message);
  }
};

const sortByDateDesc = (items, getDate) => {
  return [...items].sort(
    (a, b) => new Date(getDate(b)).getTime() - new Date(getDate(a)).getTime(),
  );
};

const getSourceSummary = (cluster) => {
  const uniqueSources = [
    ...new Set(
      cluster.articles.map((article) => article.sourceName).filter(Boolean),
    ),
  ];
  if (uniqueSources.length > 1) return `${uniqueSources.length} sources`;
  return uniqueSources[0] || "Unknown source";
};

export { getThisWeeksClusters, sortByDateDesc, getSourceSummary };
