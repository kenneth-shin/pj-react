import React from 'react';

function ChildComponent(props) {
  return (
    <div className='personInfo'>
      <p>Name: {props.fullName}</p>
      <p>Age: {props.age}</p>
      <p>Is Student: {props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  );
}

ChildComponent.defaultProps = {
    age:'0'
}
  

export default ChildComponent;