import React, {useState} from 'react';

function UseStateExample() {
  // "count"라는 새로운 state 변수를 생성하고, 초기값은 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        + Add
      </button>
      <button onClick={() => setCount(count - 1)}>
        - Subtract
      </button>
    </div>
  );
}

export default UseStateExample