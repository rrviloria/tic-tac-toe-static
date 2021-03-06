import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { SIZE } from '../constants/index.js';
import GameBoard from './GameBoard.jsx';
import GameInfo from './GameInfo.jsx';
import PopupModal from './PopupModal.jsx';
import TicTacToeWinnerChecker from '../utils/checker.js';
import { generateBoard } from '../utils/index.js';


const Game = ({
    playerX, playerO,
    setPlayerO, setPlayerX,
    setPage, round, setRound,
    game, updateCurrentGame,
    board, setBoard, saveRound
  }) => {

  const [currentPlayer, setCurrentPlayer] = useState(playerX);
  const [modal, setModal] = useState({title: 'Winner!', body: ''});
  const [winner, setWinner] = useState(null);
  const [showWinner, setShowWinner] = useState(false);
  const checker = new TicTacToeWinnerChecker(SIZE);

  const toggleCurrentPlayer = () => {
    if(currentPlayer === playerX) {
      setCurrentPlayer(playerO);
    } else if(currentPlayer === playerO) {
      setCurrentPlayer(playerX);
    }
  };

  const hasWinner = (board) => {
    const value = checker.checkWinner(board);
    if(value === 1) {
      playerX.score += 1;
      setPlayerX(playerX);
      setWinner(playerX);
    } else if(value === -1) {
      playerO.score += 1;
      setPlayerO(playerO);
      setWinner(playerO);
    }
    else if(value === 0) {
      setWinner('DRAW');
    }
  };

  const resetGame = () => {
    setWinner(null);
    setBoard(generateBoard(SIZE));
  };

  const gameOver = () => {
    if(winner === 'DRAW') {
      modal['title'] = 'Draw!';
      modal['body'] = 'No winner, the game is draw!';
      setModal({...modal});
      setShowWinner(true);
    } else {
      modal['title'] = 'Winner!';
      modal['body'] = 'Player ' + winner.name + ' wins!';
      setModal({...modal});
      setShowWinner(true);
      updateCurrentGame().then(() => {
        saveRound(winner, board);
      });
    }
    setRound(round + 1);
  };

  useEffect(() => {
    if(winner) {
      gameOver();
    }
  }, [winner]);

	return (
    <div>
      <PopupModal
        title={modal.title}
        body={modal.body}
        show={showWinner}
        setShow={setShowWinner}
        callBack={resetGame}/>

      <Row style={{marginBottom: '1.5rem'}}>
        <Col xs={3} className={'center'}></Col>
        <Col xs={6} className={'center'}>
          <GameInfo 
            playerX={playerX}
            playerO={playerO}
            round={round}/>
        </Col>
        <Col xs={3} className={'center'}></Col>
      </Row>
      <Row style={{marginBottom: '1.5rem'}}>
        <Col xs={12} className={'center player-name'}>
          {
            winner === null && (
              <span>
                <span style={{fontWeight: 'bolder'}}>{currentPlayer.name}({currentPlayer.value})&apos;s</span><span> turn</span>
              </span>
            )
          }
          
        </Col>
      </Row>
      <Row>
        <Col xs={3} className={'right player-name'}></Col>
        <Col xs={6}>
          <GameBoard 
            board={board}
            setBoard={setBoard}
            currentPlayer={currentPlayer}
            toggleCurrentPlayer={toggleCurrentPlayer}
            hasWinner={hasWinner}/>
        </Col>
        <Col xs={3} className={'left player-name'}></Col>
      </Row>
    </div>
	);
};

export default Game;