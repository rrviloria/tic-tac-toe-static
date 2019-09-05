import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Board from './components/Board.jsx';
import SelectPlayer from './components/SelectPlayer.jsx';
import { Container, Row, Col } from 'react-bootstrap';


const TicTacToe = () => {
  const [page, setPage] = useState('select-player');
  const [playerX, setPlayerX] = useState({'id': null, 'name': 'Select player X'});
  const [playerO, setPlayerO] = useState({'id': null, 'name': 'Select player O'});
  const [users, setUsers] = useState([]);
  const [board, setBoard] = useState([
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]);

  return (
    <div className='page'>
      {
        page === 'game' &&
        <Board 
          board={board}
          setBoard={setBoard}/>
        
      }
      
      {
        page === 'select-player' && 
        <SelectPlayer
          users={users}
          setUsers={setUsers}

          playerX={playerX}
          setPlayerX={setPlayerX}
          playerO={playerO}
          setPlayerO={setPlayerO}
          setPage={setPage}
        />
      }

    </div>
  );
}

export default TicTacToe;
