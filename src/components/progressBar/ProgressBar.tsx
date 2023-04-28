import React from 'react';
import './ProgressBar.scss';

function ProgressBar(props) {
  return (
    <div className="progressBarContainer">
      <progress id="progressBar" hidden value={props.progressValue} max={props.trialNumber}></progress>
    </div>
  )
}

export default ProgressBar;