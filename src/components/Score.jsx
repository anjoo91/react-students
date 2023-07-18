import React from 'react';
import './Score.css';


export default function Score({ score }) {
    return (
        <ul className="score-list">
          <li className="score-date">Date: {score.date}</li>
          <li className="score">Score: {score.score}</li>
        </ul>
      );
      
};