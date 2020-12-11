import React, { useState } from 'react';
import Logo from '../../images/logo.jpg';

import './styles.css';

const Container = () => {
  const [horizontal, setHorizontal] = useState(220);
  const [vertical, setVertical] = useState(220);
  const handleMovement = (verticalMove, up, horizontalMove, left) => {
    if (verticalMove) {
      if (vertical === 0 && up) {
        setVertical(0);
        return;
      }
      if (vertical === 470 && !up) {
        setVertical(470);
        return;
      }
      if (up) setVertical(vertical - 10)
      else setVertical(vertical + 10);
    } else if (horizontalMove) {
      if (horizontal === 460 && !left) {
        setHorizontal(460);
        return;
      }
      if (horizontal === 0 && left) {
        setHorizontal(0);
        return;
      }
      console.log(left);
      if (left) setHorizontal(horizontal - 10)
      else setHorizontal(horizontal + 10);
    }
  }

  return (
    <div className="container">
      <div className="container__row --flex-1">
        <div className="container__row--corner --gray"></div>
        <div className="container__row--select --blue" onClick={() => handleMovement(true, true)}></div>
        <div className="container__row--corner --gray"></div>
      </div>
      <div className="container__row --flex-5">
        <div className="container__row--corner --blue" onClick={() => handleMovement(false, false, true, true)}></div>
        <div className="container__row--select --gray">
          <img src={Logo} alt="logo" style={{ top: vertical, left: horizontal }} />
        </div>
        <div className="container__row--corner --blue" onClick={() => handleMovement(false, false, true, false)}></div>
      </div>
      <div className="container__row --flex-1">
        <div className="container__row--corner --gray"></div>
        <div className="container__row--select --blue" onClick={() => handleMovement(true, false)}></div>
        <div className="container__row--corner --gray"></div>
      </div>
    </div>
  );
}

export default Container;
