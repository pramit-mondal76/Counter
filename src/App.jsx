import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);
  //useState is React Hook that allows you to add state to a functional component.
  //let counter = 5;
  const addValue = () => {
    setCounter(counter + 1);
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Couter Count</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button><br /><br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
