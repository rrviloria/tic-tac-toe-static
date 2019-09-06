import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { getUsers } from '../api/users';
import CreateUser from '../components/CreateUser.jsx';
import PlayerSelection from '../components/PlayerSelection.jsx';


const HomePage = ({ users, setUsers, playerX, setPlayerX, playerO, setPlayerO, setPage }) => {
  const [userLoaded, setUserLoaded] = useState(false);

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
      <Row style={{'margin-bottom': '1rem'}}>
        <Col xs={5} className={'left'}>
          <CreateUser setUserLoaded={setUserLoaded}/>
        </Col>
        <Col xs={7} className={'right'}>
          <Button disabled={
              playerX.id === null || playerO.id === null
            }
            variant="primary"
            onClick={() => {setPage('game')}}>Start game</Button>
        </Col>
      </Row>
      <Row>
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
          <div style={{'font-size': '6vh', 'padding': '15% 0'}}>VS</div>
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
    </Container>
	);
};

export default HomePage;