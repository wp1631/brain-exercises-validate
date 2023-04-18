import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import SSLanding from './pages/gameLanding/ssLanding/SSLanding';
import SSInstruction from './pages/gameInstruction/ssInstruction/SSInstruction';
import SSGame from './pages/game/ssGame/SSGame';
import LoadingSpinner from './components/loadingSpinner/LoadingSpinner';

function App() {

  useEffect(() => {
    const disablePinchZoom = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }
    document.addEventListener("touchmove", disablePinchZoom, { passive: false })
    
    documentHeightWidth();

    window.addEventListener('resize', documentHeightWidth);
    window.addEventListener('orientationchange', documentHeightWidth);
  }, [])
  
  function documentHeightWidth() {
    const calWidth = '' + document.documentElement.clientWidth;
    const calHeight = '' + document.documentElement.clientHeight;
    const calSum = (+calWidth) + (+calHeight);
    getComputedStyle(document.documentElement).getPropertyValue('--this-width');
    getComputedStyle(document.documentElement).getPropertyValue('--this-height');
    getComputedStyle(document.documentElement).getPropertyValue('--this-sum');
    document.documentElement.style.setProperty('--this-width', calWidth + 'px');
    document.documentElement.style.setProperty('--this-height', calHeight + 'px');
    document.documentElement.style.setProperty('--this-sum', calSum + 'px');
  }
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/spatial-span" element={<SSLanding />}></Route>
          <Route path="/spatial-span/instruction" element={<SSInstruction />}></Route>
          <Route path="/spatial-span/trial" element={<SSGame />}></Route>
        </Routes>
        <LoadingSpinner />
    </Router>
  );
}

export default App;
