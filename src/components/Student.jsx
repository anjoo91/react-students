import React from 'react';
import Score from './Score';
import './Student.css';


export default function Student({ student }) {
    return (
        <div className="student">
          <h2>{student.name}</h2>
          <p>{student.bio}</p>
          <h3>Scores:</h3>
          <ul>
            {student.scores.map((score, index) => (
              <Score key={index} score={score} />
            ))}
          </ul>
        </div>
      );
      
};
