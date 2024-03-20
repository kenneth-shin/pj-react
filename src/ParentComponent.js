import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const name = "John";
  const age = 34;
  const isStudent = true;

  return (
    <ChildComponent
      fullName={name}
      age={age}
      isStudent={isStudent}
    />
  );
}

export default ParentComponent;