/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";
import { getClusters } from "../api/clustersApi1";

const NewsContext = createContext(null);

export function NewsProvider({ children }) {
  const [activeView, setActiveView] = useState("clusters");
  const [openClusterIds, setOpenClusterIds] = useState(
    () => new Set(["cluster-1"]),
  );
  const clusters = useMemo(() => getClusters(), []); //The calling of the server activity to getCluster is an expensive and repetitive process because it is updated every hour.

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
