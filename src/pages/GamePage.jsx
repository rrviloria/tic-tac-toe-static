import React from 'react';
import Game from '../components/Game.jsx';


const GamePage = ({ playerX, playerO, setPlayerO, setPlayerX, setPage }) => {
  
	return (
    <Game 
      playerX={playerX}
      playerO={playerO}
      setPlayerX={setPlayerX}
      setPlayerO={setPlayerO}
      setPage={setPage}/>
	);
};

export default GamePage;