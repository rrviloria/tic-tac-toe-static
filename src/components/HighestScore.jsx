import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { getGames } from '../api/games';


const HighestScore = ({ limit }) => {
  const [scoresLoaded, setScoresLoaded] = useState(false);
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    if(scoresLoaded === false) {
      const asyncFn = async() => {
        const data = await getGames({
          ordering: '-highest_score',
          highest_score__isnull: 'False',
          winner__isnull: 'False',
          limit: limit
        });
        setHighScores(data.results);
        setScoresLoaded(true);
      };

      asyncFn();
    }
  }, [scoresLoaded]);

	return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th width='60%'>Game</th>
          <th>Winner</th>
          <th width='15%'>Highest Score</th>
        </tr>
      </thead>
      <tbody>
        {
          highScores.map((item) => (
            <tr>
              <td>{item.player_x_name} vs {item.player_o_name}</td>
              <td>{item.winner_name}</td>
              <td>{item.highest_score}</td>
            </tr>
          ))
        }
        {
          highScores.length === 0 && (
            <tr>
              <td colSpan="3">No records to show</td>
            </tr>
          )
        }
      </tbody>
    </Table>
	);
};

export default HighestScore;