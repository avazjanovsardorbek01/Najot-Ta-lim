// hook => React qoshimchasi
import { useState } from "react";
import React from "react";
function App() {
  const [count, setCount] = useState(0); // setCount assosiy vazifasi countni countni ozgartirish
  // const increaseCount = () => {
  //   setCount((count) => count + 1);
  // };
  // const decreaseCount = () => {
  //   setCount((count) => count - 1);
  // };
  return (
    <div>
      <h1>Hello React</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
}

export default App;
