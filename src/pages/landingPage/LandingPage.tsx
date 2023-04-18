import React from 'react';
import './LandingPage.css';
import AppHeader from '../.././components/appHeader/AppHeader';
import GameCards from '../.././components/gameCards/GameCards';
import RotateAlert from '../../components/rotateAlert/RotateAlert';

function LandingPage() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div id='LandingPageHeader'>
              {<AppHeader />}
            </div>
            <div id='LandingPageBody'>
              {<GameCards />}
            </div>
        </div>
        {<RotateAlert />}
    </div>
  )
}

export default LandingPage