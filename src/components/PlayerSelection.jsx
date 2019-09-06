import React from 'react';
import { Dropdown, DropdownButton, Card } from 'react-bootstrap';


const PlayerSelection = ({ users, setUsers, player, setPlayer, value }) => {

  const initializePlayer = (user) => {
    user.value = value;
    user.score = 0;
    setPlayer(user);
  };

	return (
	  <Card className={'select-player-card'}>
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
          <DropdownButton variant={'light'} id="dropdown-item-button" title={player.name}>
            {
              users.map((user) => (
                <Dropdown.Item as="button" onClick={() => {initializePlayer(user)}}>{user.name}</Dropdown.Item>
              ))
            }
          </DropdownButton>
        </Card.Text>
      </Card.Body> 
    </Card>
	);
};

export default PlayerSelection;