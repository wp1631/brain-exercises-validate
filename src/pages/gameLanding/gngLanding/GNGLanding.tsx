import React, { useEffect } from 'react'
import './GNGLanding.scss'
import AppHeader from '../../.././components/appHeader/AppHeader'
import GNGWindow from '../../../components/gameWindow/gngWindow/GNGWindow'
import EnterButtons from '../../.././components/enterButtons/EnterButtons'
import RotateAlert from '../../../components/rotateAlert/RotateAlert'

let alwaysFlash = 'always-flash';
function GNGLanding() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div id='GNGLandingHeader'>
              {<AppHeader />}
            </div>
            <div id='GNGLandingBody'>
              <div className="GNGLandingProgressBar"></div>
              <div className="GNGLandingWindow">
                {<GNGWindow alwaysFlash={alwaysFlash}/>}
              </div>
              <div className="GNGLandingEnterButton">
                {<EnterButtons />}
              </div>
            </div>
        </div>
        {<RotateAlert />}
    </div>
  )
}

export default GNGLanding