import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { getUsers } from '../api/users';
import CreateUser from './CreateUser.jsx';


const SelectPlayer = ({ users, setUsers, playerX, setPlayerX, playerO, setPlayerO, setPage }) => {
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
      const asyncFn = async() => {
        setUsers(await getUsers());
        setUserLoaded(true);
      };

      asyncFn();
  }, [userLoaded]);

	return (
	  <Container> 
      <CreateUser setUserLoaded={setUserLoaded}/>
      <Row>
        <Col xs={5} className={'center'}>
          <Card className={'select-player-card'}>
            <Card.Body>
              <Card.Title>{playerX.name}</Card.Title>
              <Card.Text>
                <DropdownButton id="dropdown-item-button" title={playerX.name}>
                  {
                    users.map((user) => (
                      <Dropdown.Item as="button" onClick={() => {setPlayerX(user)}}>{user.name}</Dropdown.Item>
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
                <DropdownButton id="dropdown-item-button" title={playerO.name}>
                  {
                    users.map((user) => (
                      <Dropdown.Item as="button" onClick={() => {setPlayerO(user)}}>{user.name}</Dropdown.Item>
                    ))
                  }
                </DropdownButton>
              </Card.Text>
            </Card.Body> 
          </Card>
        </Col>
      </Row>

      <Row style={{'margin-top': '2vh', 'text-align': 'center'}}>
        <Col xs={12}>
          <Button disabled={
              playerX.id === null || playerO.id === null
            }
            variant="primary"
            onClick={() => {setPage('game')}}>Start Game</Button>
        </Col>
      </Row>
    </Container>
	);
};

export default SelectPlayer;