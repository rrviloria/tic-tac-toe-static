import React, { useState } from 'react';
import { createUser } from '../api/users';
import { Button, InputGroup, FormControl } from 'react-bootstrap';


const CreateUser = ({ setUserLoaded }) => {
  const [enableUserCreate, setEnableUserCreate] = useState(false);
  const [newUserName, setNewUserName] = useState(null);

  const createNewUser = async() => {
    await createUser({name: newUserName});
    setEnableUserCreate(false);
    setUserLoaded(false);
  };

	return (
    <span>
      {
        enableUserCreate === false && <Button variant="primary" onClick={() => {setEnableUserCreate(true)}}>Create new user</Button>
      }
      {
        enableUserCreate === true && (
          <InputGroup className="mb-3">
            <FormControl
              placeholder="New name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => {setNewUserName(e.target.value)}}
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={createNewUser}>Create</Button>
            </InputGroup.Append>
          </InputGroup>
        )
      }
    </span>
	);
	  
};

export default CreateUser;