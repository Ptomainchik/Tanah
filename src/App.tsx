import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './Components/HomePage/HomePage';
import { RacesPage } from './Components/Races/RacesPage';
import { FactionsPage } from './Components/Factions/Factions';
import { AngalWastelands } from './Components/Factions/AngalWastelands/AngalWastelands';
import { BearPeaks } from './Components/Factions/BearPeaks/BearPeaks';
import { BlackForest } from './Components/Factions/BlackForest/BlackForest';
import { ConfederationOfTribes } from './Components/Factions/ConfederationOfTribes/ConfederationOfTribes';
import { EmpireMarah } from './Components/Factions/EmpireMarah/EmpireMarah';
import { KingdomInmar } from './Components/Factions/KingdomInmar/KingdomInmar';
import { EventsInHistory } from './Components/EventsInHistory/EventsInHistory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="races" element={<RacesPage/>}/>
        <Route path="factions" element={<FactionsPage/>}/>
        <Route path="events" element={<EventsInHistory/>}/>
        <Route path="wastelands" element={<AngalWastelands/>}/>
        <Route path="bearpeaks" element={<BearPeaks/>}/>
        <Route path="blackforest" element={<BlackForest/>}/>
        <Route path="confederation" element={<ConfederationOfTribes/>}/>
        <Route path="empire" element={<EmpireMarah/>}/>
        <Route path="inmar" element={<KingdomInmar/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
