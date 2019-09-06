import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Game from '../components/Game.jsx';


const GamePage = ({ playerX, playerO, setPlayerO, setPlayerX, setPage }) => {
	const [round, setRound] = useState(1);

	const newGame = () => {
		setPlayerX({'id': null, 'name': 'Select player X'});
  	setPlayerO({'id': null, 'name': 'Select player O'});
  	setPage('select-player');
	};

	return (
	  <div>
	  	<Row style={{'margin-bottom': '1.5rem'}}>
        <Col xs={3} className={'center'}></Col>
        <Col xs={6} className={'left'}>
          <Button 
            variant="primary"
            onClick={newGame}>New game</Button>
        </Col>
      </Row>
		  <Game 
				playerX={playerX}
				playerO={playerO}
				setPlayerX={setPlayerX}
				setPlayerO={setPlayerO}
				setPage={setPage}
				round={round}
				setRound={setRound}/>
	  </div>
	);
};

export default GamePage;