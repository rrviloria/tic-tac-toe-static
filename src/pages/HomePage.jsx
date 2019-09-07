import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getUsers } from '../api/users';
import { createGame } from '../api/games';
import CreateUser from '../components/CreateUser.jsx';
import PlayerSelection from '../components/PlayerSelection.jsx';
import HighestScore from '../components/HighestScore.jsx';
import { TOP_SCORES_N } from '../constants/index.js';


const HomePage = ({ users, setUsers, playerX, setPlayerX, playerO, setPlayerO, setPage, setGame }) => {
  const [userLoaded, setUserLoaded] = useState(false);

  const createNewGame = () => {
    const query = {
      player_x: playerX.id,
      player_o: playerO.id
    }
    createGame(query).then(({ data }) => {
      setGame(data);
      setPage('game');
    });
  };

  useEffect(() => {
    if(userLoaded === false) {
      const asyncFn = async() => {
        setUsers(await getUsers());
        setUserLoaded(true);
      };

      asyncFn();
    }
  }, [userLoaded]);

	return (
	  <Container> 
      <Row style={{marginBottom: '1rem'}}>
        <Col xs={5} className={'left'}>
          <CreateUser setUserLoaded={setUserLoaded}/>
        </Col>
        <Col xs={7} className={'right'}>
          <Button disabled={
              playerX.id === null || playerO.id === null
            }
            variant="primary"
            onClick={createNewGame}>Start game</Button>
        </Col>
      </Row>
      <Row style={{marginBottom: '5rem'}}>
        <Col xs={5} className={'center'}>
          <PlayerSelection 
            users={users}
            setUsers={setUsers}
            player={playerX}
            setPlayer={setPlayerX}
            value={'x'}
            />
        </Col>
        <Col xs={2} className={'center'}>
          <div style={{fontSize: '2.5rem', 'padding': '15% 0'}}>VS</div>
        </Col>
        <Col xs={5} className={'center'}>
          <PlayerSelection 
            users={users}
            setUsers={setUsers}
            player={playerO}
            setPlayer={setPlayerO}
            value={'o'}
            />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <span style={{fontWeight: 'bold'}}>Showing top {TOP_SCORES_N} game scores</span>
          <HighestScore limit={TOP_SCORES_N}/>
        </Col>
      </Row>
    </Container>
	);
};

export default HomePage;