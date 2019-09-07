import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SIZE } from '../constants/index.js';


const Board = ({ board, setBoard, currentPlayer, toggleCurrentPlayer, hasWinner }) => {
  const sizePerCell = 12 / SIZE;

  const cellClick = (i, j) => {
    if(board[i][j] === null) {
      let newBoard = [...board];
      newBoard[i][j] = currentPlayer.value;
      setBoard(newBoard);

      toggleCurrentPlayer();
      hasWinner(newBoard);
    }
  };

	return (
    <Container id='board'>
    {
  	  board && board.map(
          (item, i) => (
            <Row>
              {
                item.map((value, j) => (
                  <Col
                    onClick={() => { cellClick(i, j) }}
                    xs={sizePerCell} className='board-cell'>
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