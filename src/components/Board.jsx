import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const Board = ({ board, setBoard }) => {
  const [currentPlayer, setCurrentPlayer] = useState(null);

  const cellClick = (i, j) => {
    let newBoard = [...board];
    newBoard[i][j] = 'X';
    setBoard(newBoard);
  };

	return (
    <Container>
    {
  	  board && board.map(
          (item, i) => (
            <Row>
              {
                item.map((value, j) => (
                  <Col
                    onClick={() => { cellClick(i, j) }}
                    xs={4} className='board-cell'>
                      {value}
                    </Col>
                ))
              }
            </Row>
          )
        )
    }
    </Container>
	);
};

export default Board;