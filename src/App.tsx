import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './Components/HomePage/HomePage';
import { AngalWastelands } from './Components/Factions/AngalWastelands/AngalWastelands';
import { BearPeaks } from './Components/Factions/BearPeaks/BearPeaks';
import { BlackForest } from './Components/Factions/BlackForest/BlackForest';
import { ConfederationOfTribes } from './Components/Factions/ConfederationOfTribes/ConfederationOfTribes';
import { EmpireMarah } from './Components/Factions/EmpireMarah/EmpireMarah';
import { KingdomInmar } from './Components/Factions/KingdomInmar/KingdomInmar';
import { AngalsRacePage } from './Components/Races/Angals/AngalsRacePage';
import { DwarvenRacesPage } from './Components/Races/Dwarven/DwarvenRacesPage';
import { OrcRacePage } from './Components/Races/Orc/OrcRacePage';
import { HumanRacesPage } from './Components/Races/Human/HumanRacesPage';
import { ElvenRacePage } from './Components/Races/Elven/ElvenRacePage';
import { HistoryPage } from './Components/HistoryPage/HistoryPage';
import { EmptinessPage } from './Components/EmptinessPage/ EmptinessPage';
import { MaatRacePage } from './Components/Races/Maat/MaatRacePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="history" element={<HistoryPage/>}/>
        <Route path="emptiness" element={<EmptinessPage/>}/>
        <Route path="wastelands" element={<AngalWastelands/>}/>
        <Route path="bearpeaks" element={<BearPeaks/>}/>
        <Route path="blackforest" element={<BlackForest/>}/>
        <Route path="confederation" element={<ConfederationOfTribes/>}/>
        <Route path="inmar" element={<KingdomInmar/>}/>
        <Route path="empire" element={<EmpireMarah/>}/>
        <Route path="angals" element={<AngalsRacePage/>}/>
        <Route path="dwarven" element={<DwarvenRacesPage/>}/>
        <Route path="orc" element={<OrcRacePage/>}/>
        <Route path="humans" element={<HumanRacesPage/>}/>
        <Route path="elven" element={<ElvenRacePage/>}/>
        <Route path="maat" element={<MaatRacePage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
