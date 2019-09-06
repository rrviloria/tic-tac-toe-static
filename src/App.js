import React, { useState } from 'react';
import './css/App.css';
import GamePage from './pages/GamePage.jsx';
import HomePage from './pages/HomePage.jsx';


const TicTacToe = () => {
  const [page, setPage] = useState('select-player');
  const [playerX, setPlayerX] = useState({'id': null, 'name': 'Select player X'});
  const [playerO, setPlayerO] = useState({'id': null, 'name': 'Select player O'});
  const [users, setUsers] = useState([]);

  return (
    <div className='page'>
      {
        page === 'select-player' && 
        <HomePage
          users={users}
          setUsers={setUsers}

          playerX={playerX}
          setPlayerX={setPlayerX}
          playerO={playerO}
          setPlayerO={setPlayerO}
          setPage={setPage}
        />
      }

      {
        page === 'game' && 
        <GamePage 
          playerX={playerX}
          playerO={playerO}
          setPlayerX={setPlayerX}
          setPlayerO={setPlayerO}
          setPage={setPage}/>
      }

    </div>
  );
}

export default TicTacToe;
