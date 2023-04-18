import React from 'react';
import './ProgressBar.css';

function ProgressBar(props) {
  return (
    <div className="progressBarContainer">
      <progress id="progressBar" hidden value={props.progressValue} max={props.trialNumber}></progress>
    </div>
  )
}

export default ProgressBar;