import React from 'react'
import './SSInstruction.css'
import AppHeader from '../../../components/appHeader/AppHeader';
import SSWindow from '../../../components/gameWindow/ssWindow/SSWindow';
import ProgressBar from '../../../components/progressBar/ProgressBar';

function SSInstruction() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div id='SSInstructionHeader' className='col'>
              {<AppHeader />}
            </div>
            <div id='SSInstructionBody' className='col'>
            <div className="SSInstructionBodyProgressBar">
              {/* {<ProgressBar progressValue={progressValue} trialNumber={trialNumber}/>} */}
              {<ProgressBar />}
            </div>
              <div className="SSInstructionWindow">
                {/* {<SSWindow checkSeq={checkSeq}/>} */}
                {<SSWindow />}
              </div>
              <div className="SSInstructionEnterButton"></div>
            </div>
        </div>
    </div>
  )
}

export default SSInstruction