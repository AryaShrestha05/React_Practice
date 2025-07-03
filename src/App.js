import logo from './logo.svg';
import './App.css';
//Allows us to do something in some kind of event, effect
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    //dependency arrays: Runs everytime the value in the array changes
    //Runs only once if the array is empty
    alert("You have changed the counter to: " + count)
  }, [count])
  
    return(
      <div className = "App">
        <button onClick={() => {setCount((prevCount) => prevCount - 1)}}>-</button>
        <h1>{count}</h1>
        <button onClick = {() => {setCount((prevCount) => prevCount + 1)}}>+</button>
      </div>
    )
}

export default App;
