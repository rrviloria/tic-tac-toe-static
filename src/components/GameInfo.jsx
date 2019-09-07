import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';


const GameInfo = ({ round, playerX, playerO }) => {
	return (
    <Card>
      <Card.Body>
        <Row>
          <Col xs={5}>
            <Card.Title style={{fontWeight: 'bolder'}}>({playerX.value}) {playerX.name}</Card.Title>
            <Card.Title>{playerX.score}</Card.Title>
          </Col>
          <Col xs={2}>
            <Card.Title style={{fontWeight: 'bolder'}}>Round</Card.Title>
            <Card.Title>{round}</Card.Title>
          </Col>
          <Col xs={5}>
            <Card.Title style={{fontWeight: 'bolder'}}>({playerO.value}) {playerO.name}</Card.Title>
            <Card.Title>{playerO.score}</Card.Title>
          </Col>
        </Row>
      </Card.Body> 
    </Card>
	);
};

export default GameInfo;