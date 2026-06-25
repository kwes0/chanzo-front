import axios from "axios";

const localserver = import.meta.env.VITE_LOCAL_URL;
const remoteserver = import.meta.env.VITE_SERVER_URL;
const baseUrl = localserver || remoteserver;

// const clusters = async () => {
//   const allClusteredURL = `${baseUrl}/ropie/allClustered`;
//   try {
//     const response = await axios.get(allClusteredURL);
//     const clusteredArticles = response.data;
//     console.log(clusteredArticles);
//     return clusteredArticles;
//   } catch (e) {
//     console.error("Hapo kwa kuget clusters kuna shida: ", e.message);
//   }
// };

const getThisWeeksClusters = async () => {
  // return clusters;
  const weekClusterEndpoint = `${baseUrl}/ropie/weeksClusters`;
  //Handle this in a try catch
  try {
    const response = await axios.get(weekClusterEndpoint);
    //const response = await axios.get(allClusteredURL, {params: {view, page, limit}})
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error("Kuna error kwa kuget clusters: ", e.message);
  }
};

// const getDailyArticles = async () => {};

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

export {
  getThisWeeksClusters,
  // getDailyArticles,
  sortByDateDesc,
  getSourceSummary,
};
