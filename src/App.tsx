import wineData from "./data/Wine-Data.json";
import WineStatsTable from "./components/WineTable";
import { pageConstants } from "./constants/pageConstants";
import calculateClassWiseStats from "./utils/statisticsFunctions";

function App() {
  // Constants
  const { title1, title2 } = pageConstants?.Home;

  // Calculating Classwise Stats, here we are using second argument as Flavanoids to find that we need to find mean,mode & median with respect to Flavanoids.
  const classWiseFlavanoidsStats = calculateClassWiseStats(
    wineData,
    "Flavanoids"
  );
  // Calculating Classwise Stats, here we are using second argument as empty to find that we need to create new property like Gamma and then find mean,mode & median.
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
