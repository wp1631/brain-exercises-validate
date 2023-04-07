import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import SSLanding from './pages/gameLanding/ssLanding/SSLanding';
import SSInstruction from './pages/gameInstruction/ssInstruction/SSInstruction';
import SSGame from './pages/game/ssGame/SSGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="/spatial-span" element={<SSLanding />}>
            <Route path="/spatial-span/instruction" element={<SSInstruction />}></Route>
            <Route path="/spatial-span/trial" element={<SSGame />}></Route>
          </Route>
          {/* <Route path="/conjunction-search" element={<></>}>
            <Route path="/instruction" element={<></>}></Route>
            <Route path="/trial" element={<></>}></Route>
          </Route>
          <Route path="/go-nogo" element={<></>}>
            <Route path="/instruction" element={<></>}></Route>
            <Route path="/trial" element={<></>}></Route>
          </Route> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
