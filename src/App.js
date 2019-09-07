import React, { useState } from 'react';
import './css/App.css';
import GamePage from './pages/GamePage.jsx';
import HomePage from './pages/HomePage.jsx';


const TicTacToe = () => {
  const [page, setPage] = useState('home');
  const [playerX, setPlayerX] = useState({'id': null, 'name': 'Select player X'});
  const [playerO, setPlayerO] = useState({'id': null, 'name': 'Select player O'});
  const [users, setUsers] = useState([]);
  const [game, setGame] = useState(null);

  return (
    <div className='page'>
      {
        page === 'home' && 
        <HomePage
          users={users}
          setUsers={setUsers}

          playerX={playerX}
          setPlayerX={setPlayerX}
          playerO={playerO}
          setPlayerO={setPlayerO}
          setPage={setPage}
          setGame={setGame}
        />
      }

      {
        page === 'game' && game &&
        <GamePage 
          playerX={playerX}
          playerO={playerO}
          setPlayerX={setPlayerX}
          setPlayerO={setPlayerO}
          setPage={setPage}
          game={game}/>
      }

    </div>
  );
}

export default TicTacToe;
