/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { getClusters } from "../api/clustersApi";

const NewsContext = createContext(null);

export function NewsProvider({ children }) {
  const [activeView, setActiveView] = useState("clusters");
  const [openClusterIds, setOpenClusterIds] = useState(() => new Set());
  const [clusters, setClusters] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getClusters();
        setClusters(data.data);
      } catch (e) {
        console.error("error kwa fetch in context:", e.message);
      }
    };
    fetch();
  }, []);

  const toggleCluster = (clusterId) => {
    setOpenClusterIds((current) => {
      const next = new Set(current);
      if (next.has(clusterId)) next.delete(clusterId);
      else next.add(clusterId);
      return next;
    });
  };

  const value = {
    activeView,
    setActiveView,
    clusters,
    openClusterIds,
    toggleCluster,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export function useNews() {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used inside NewsProvider");
  return context;
}
