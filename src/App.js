import "./App.css";
import FlavanoidsTable from "./Components/Flavanoids";
import GammaTable from "./Components/Gamma";
import wineData from "./Wine-Data.json";

function App() {
  return (
    <div className="App">
      <div>
        <FlavanoidsTable wineData={wineData} />
        <GammaTable wineData={wineData} />
      </div>
    </div>
  );
}

export default App;
