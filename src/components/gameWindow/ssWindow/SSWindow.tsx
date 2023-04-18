import React from 'react';
import './SSWindow.css';

function SSWindow(props) {
  
  return (
    <div className="cirBtnContainer">
      <div className="signal readyToClick" id="goSignal"></div>
      <button className="cirButton 1" id='cirButton1' onClick={props.checkSeq}></button>
      <button className="cirButton 2" id='cirButton2' onClick={props.checkSeq}></button>
      <button className="cirButton 3" id='cirButton3' onClick={props.checkSeq}></button>
      <button className="cirButton 4" id='cirButton4' onClick={props.checkSeq}></button>
      <button className="cirButton 5" id='cirButton5' onClick={props.checkSeq}></button>
      <button className="cirButton 6" id='cirButton6' onClick={props.checkSeq}></button>            
    </div>
  )
}

export default SSWindow;