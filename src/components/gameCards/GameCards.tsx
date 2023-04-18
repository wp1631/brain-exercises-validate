import React from 'react';
import './GameCards.css';
import SSImg from '../.././assets/png/ss-img.png';
import { useNavigate } from 'react-router-dom';

function GameCards() {
  const navigate = useNavigate();

  function selectGame(game: string) {
    switch (game) {
      case 'spatial-span':
          navigate(`./${game}`);
          break
      case 'conjunction-search':
          navigate(`./${game}`);
          break;
      case 'go-nogo':
          navigate(`./${game}`);
          break
      default:
          navigate(`./${game}`);
          break;
    }
  }

  return (
    <div className="container-fluid">
      <div id="control-height"></div>
      <div className="row mb-3 mt-3">
        <div className="headerCategory">
          ความจำ
        </div>
        <div className="cardBox" onClick={() => selectGame('spatial-span')}>
          <div>
            <img src={SSImg} alt="ss-game-img" className="gameImage"/>
          </div>
          <div className="gameName">
            จำจด กดตาม
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCards