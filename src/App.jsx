import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;
  let [counter, setcounter] = useState(15);

  const addValue = () => {
    setcounter(counter + 1);
    if (counter == 20) {
      alert("You are at 20. Please Decrease Value");
      setcounter(20);
    }
  };

  function decreaseValue() {
    setcounter(counter - 1);
    if (counter == 0) {
      alert("You are at zero. Please Increase Value");
      setcounter(0);
    }
  }

  return (
    <>
      <h1> Modify the Number: </h1>
      <h3>Counter Value : {counter}</h3>

      <button onClick={addValue}>Increase No. {counter}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease No. {counter}</button>
      <h4>{counter}</h4>
    </>
  );
}

export default App;
