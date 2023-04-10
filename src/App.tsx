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
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/spatial-span" element={<SSLanding />}></Route>
        <Route path="/spatial-span/instruction" element={<SSInstruction />}></Route>
        <Route path="/spatial-span/trial" element={<SSGame />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
