import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { SIZE } from '../constants/index.js';
import { generateBoard } from '../utils/index.js';
import Game from '../components/Game.jsx';
import PopupModal from '../components/PopupModal.jsx';
import { updateGame } from '../api/games';
import { createGameRound } from '../api/rounds';


const GamePage = ({ playerX, playerO, setPlayerO, setPlayerX, setPage, game }) => {
	const [board, setBoard] = useState(generateBoard(SIZE));
	const [round, setRound] = useState(1);
	const [confirm, setConfirm] = useState(false);

	const getGameWinner = () => {
		let gameWinnerId = null;
	    if(playerX.score > playerO.score) {
	      gameWinnerId = playerX.id;
	    } else if(playerO.score > playerX.score) {
	      gameWinnerId = playerO.id;
	    } // retur null if draw
	    return gameWinnerId;
	};

	const updateCurrentGame = () => {
	    return updateGame(game.id, {
	      player_x_score: playerX.score,
	      player_o_score: playerO.score,
	      winner: getGameWinner(),
	      highest_score: (playerX.score > playerO.score? playerX.score : playerO.score)
	    });
	};

	const saveRound = (winner, board) => {
		var newBoard = [...board];
		for(var i = 0; i < newBoard.length; i++) {
			for(var j = 0; j < newBoard[i].length; j++) {
				if(newBoard[i][j] === null) {
					newBoard[i][j] = '';
				}
			}
		}
		return createGameRound({
			game: game.id,
			winner: null,
			board: newBoard,
		});
	};

	const newGame = () => {
		saveRound(null, board).then(() => {
			setPlayerX({'id': null, 'name': 'Select player X'});
		  	setPlayerO({'id': null, 'name': 'Select player O'});
		  	setPage('home');
		});
	};

	return (
	  <div>
	  	<PopupModal
	        title={'Confirmation'}
	        body={'Are you sure you want to create new game?'}
	        show={confirm}
	        setShow={setConfirm}
	        callBack={newGame}/>

	  	<Row style={{marginBottom: '1.5rem'}}>
	        <Col xs={3} className={'center'}></Col>
	        <Col xs={6} className={'left'}>
	          <Button 
	            variant="primary"
	            onClick={() => setConfirm(true)}>New game</Button>
	        </Col>
      	</Row>
		  <Game 
			playerX={playerX}
			playerO={playerO}
			setPlayerX={setPlayerX}
			setPlayerO={setPlayerO}
			setPage={setPage}
			round={round}
			setRound={setRound}
			game={game}
			updateCurrentGame={updateCurrentGame}
			board={board}
			setBoard={setBoard}
			saveRound={saveRound}/>
	  	</div>
	);
};

export default GamePage;