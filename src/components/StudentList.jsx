import React from 'react';
import Student from './Student';
import './StudentList.css';


export default function StudentList({ students }) {
    return (
        <div className="student-list">
          {students.map((student, index) => (
            <Student key={index} student={student} />
          ))}
        </div>
      );
      
};