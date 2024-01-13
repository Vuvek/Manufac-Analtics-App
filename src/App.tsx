import wineData from "./data/Wine-Data.json";
import WineStatsTable from "./components/WineTable";
import { pageConstants } from "./constants/pageConstants";
import calculateClassWiseStats from "./utils/statisticsFunctions";

function App() {
  // Constants
  const { title1, title2 } = pageConstants?.Home;

  // Calculating Classwise Stats
  const classWiseFlavanoidsStats = calculateClassWiseStats(
    wineData,
    "Flavanoids"
  );
  const classWiseGammaStats = calculateClassWiseStats(wineData, "");

  return (
    <div className="app">
      {/* Wine Flavanoids Stats Table  */}
      <WineStatsTable
        classWiseStats={classWiseFlavanoidsStats}
        title={title1}
      />

      {/* Wine Gamma Stats Table  */}
      <WineStatsTable classWiseStats={classWiseGammaStats} title={title2} />
    </div>
  );
}

export default App;
