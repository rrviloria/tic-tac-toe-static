import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { getUsers } from '../api/users';
import CreateUser from './CreateUser.jsx';


const SelectPlayer = ({ users, setUsers, playerX, setPlayerX, playerO, setPlayerO, setPage }) => {
  const [userLoaded, setUserLoaded] = useState(false);

  const setPlayer = (user, fn, value) => {
    user.value = value;
    user.score = 0;
    fn(user);
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
          <Card className={'select-player-card'}>
            <Card.Body>
              <Card.Title>{playerX.name}</Card.Title>
              <Card.Text>
                <DropdownButton variant={'light'} id="dropdown-item-button" title={playerX.name}>
                  {
                    users.map((user) => (
                      <Dropdown.Item as="button" onClick={() => {setPlayer(user, setPlayerX, 'x')}}>{user.name}</Dropdown.Item>
                    ))
                  }
                </DropdownButton>
              </Card.Text>
            </Card.Body> 
          </Card>
        </Col>
        <Col xs={2} className={'center'}>
          <div style={{'font-size': '6vh', 'padding': '15% 0'}}>VS</div>
        </Col>
        <Col xs={5} className={'center'}>
          <Card className={'select-player-card'}>
            <Card.Body>
              <Card.Title>{playerO.name}</Card.Title>
              <Card.Text>
                <DropdownButton variant={'light'} id="dropdown-item-button" title={playerO.name}>
                  {
                    users.map((user) => (
                      <Dropdown.Item as="button" onClick={() => {setPlayer(user, setPlayerO, 'o')}}>{user.name}</Dropdown.Item>
                    ))
                  }
                </DropdownButton>
              </Card.Text>
            </Card.Body> 
          </Card>
        </Col>
      </Row>
    </Container>
	);
};

export default SelectPlayer;