//

import React, { useState } from 'react';
import StudentList from './StudentList';
import studentsData from '../students';
import './App.css';

export default function App() {
  // declare state variable 'students' w. useState hook
  // initialize state w. 'studentsData' from students.js
  // setStudents function is for updating 'students' state
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="container">
      <nav>
        <h1>Student List</h1>
      </nav>
      <StudentList students={students} />  {/* render StudentList component, pass 'students' as prop*/}
    </div>
  );
};