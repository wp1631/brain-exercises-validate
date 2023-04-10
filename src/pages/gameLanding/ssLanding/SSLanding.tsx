import React from 'react'
import './SSLanding.css'
import AppHeader from '../../.././components/appHeader/AppHeader'
import SSWindow from '../../.././components/gameWindow/ssWindow/SSWindow'
import EnterButtons from '../../.././components/enterButtons/EnterButtons'

function SSLanding() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div id='SSLandingHeader' className='col'>
              {<AppHeader />}
            </div>
            <div id='SSLandingBody' className='col'>
              <div className="SSLandingProgressBar"></div>
              <div className="SSLandingWindow">
                {<SSWindow />}
              </div>
              <div className="SSLandingEnterButton">
                {<EnterButtons />}
              </div>
            </div>
        </div>
    </div>
  )
}

export default SSLanding