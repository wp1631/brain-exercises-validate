import React from 'react';
import './LandingPage.css';
import AppHeader from '../.././components/appHeader/AppHeader'
import GameCards from '../.././components/gameCards/GameCards'

function LandingPage() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div id='LandingPageHeader' className='col'>
              {<AppHeader />}
            </div>
            <div id='LandingPageBody' className='col'>
              {<GameCards />}
            </div>
        </div>
    </div>
  )
}

export default LandingPage