import WineStatsTable from "./components/WineTable";
import wineData from "./data/Wine-Data.json"
import { calculateClassWiseStats } from "./utils/utilityFunctions";

function App() {

    const classWiseFlavanoidsStats = calculateClassWiseStats(wineData,'Flavanoids');
    const classWiseGammaStats = calculateClassWiseStats(wineData,'');
  
  return (
    <div className="app">
      {/* Wine Flavanoids Stats Table  */}
     <WineStatsTable classWiseStats={classWiseFlavanoidsStats} title="Flavanoids"/>

     {/* Wine Gamma Stats Table  */}
     <WineStatsTable classWiseStats={classWiseGammaStats} title="Gamma"/>
    </div>
  );
}

export default App;
