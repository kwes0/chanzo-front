import { NewsProvider, useNews } from "./hooks/NewsContext";
import Masthead from "./components/layout/Masthead";
import ClustersPage from "./pages/ClustersPage";
import SingleArticlesPage from "./pages/SingleArticlesPage";

function AppContent() {
  const { activeView } = useNews();

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Masthead />
      {activeView === "clusters" ? <ClustersPage /> : <SingleArticlesPage />}
    </div>
  );
}

export default function App() {
  return (
    <NewsProvider>
      <AppContent />
    </NewsProvider>
  );
}
