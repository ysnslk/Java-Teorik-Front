import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const onClickDown = () => {
    setCount(count - 1);
  };

  const onClickUp = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <button onClick={onClickDown}>-</button>
      <h2>{count}</h2>
      <button onClick={onClickUp}>+</button>
    </div>
  );
}

export default Counter;
