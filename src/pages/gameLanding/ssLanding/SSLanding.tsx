import React from 'react'
import './SSLanding.css'
import BreadCrumb from '../../../components/breadcrumbs/breadCrumb'
import AppHeader from '../../.././components/appHeader/AppHeader'
import SSWindow from '../../.././components/gameWindow/ssWindow/SSWindow'
import EnterButtons from '../../.././components/enterButtons/EnterButtons'
import RotateAlert from '../../../components/rotateAlert/RotateAlert'

function SSLanding() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div id='SSLandingHeader'>
              {<AppHeader />}
            </div>
            <div id='SSLandingBody'>
              <div className="SSLandingProgressBar"></div>
              <div className="SSLandingWindow">
                {<SSWindow />}
              </div>
              <div className="SSLandingEnterButton">
                {<EnterButtons />}
              </div>
            </div>
        </div>
        {<RotateAlert />}
    </div>
  )
}

export default SSLanding