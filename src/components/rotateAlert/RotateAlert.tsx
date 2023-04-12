import React from 'react';
import './RotateAlert.css';
import RotatePhone from '../../assets/svg/rotate-phone.svg'

function RotateAlert() {
  return (
    <div className="landscapeOrientation">
      <img src={RotatePhone} alt='rotate-phone'></img>
        <div className="rotateText">
          กรุณาหมุนจอกลับเป็นแนวตั้ง
        </div>
      </div>
  )
}

export default RotateAlert;