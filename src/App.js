import "./styles.css";
import { useState, useCallback } from "react";
import ExerciseTwo from "./Exercise2";
import ExerciseThree from "./Exercise3";

import CommentList from "./Exercise4";
import ExerciseFive from "./Exerxise5";

const App = () => {
  const [count, setCount] = useState(0);

  const Increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div className="App">
        <h1>useCallback Hooks</h1>
        <p>Count : {count} </p>
        <button onClick={Increment}> Click +</button>
        <ExerciseTwo />
        <ExerciseThree />
        <CommentList />
        <ExerciseFive />
      </div>
    </>
  );
};

export default App;
