import { useState } from "react";
import React from "react";
function App() {
  const [active, setActive] = useState(false); // work with boolean data type
  const [name, setName] = useState("Passive"); // work with string data type
  const [counters, setCounters] = useState([0, 1, 2, 3, 4]); // wor with array
  // const changeActive = () => {
  //   setActive(!active);
  //   if (active) {
  //     setName("Active");
  //   } else {
  //     setName("Passive");
  //   }
  // };
  const addCounter = () => {
    let item = counters[counters.length - 1];
    counters.push(item + 1);
    setCounters([...counters]);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-3 text-center">
            <button className="btn btn-info" onClick={addCounter}>
              Cahnge active
            </button>
            {/* {active ? <h1>Active</h1> : <h1>Passive</h1>} */}
            {/* <h2>{name}</h2> */}
            {counters.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
