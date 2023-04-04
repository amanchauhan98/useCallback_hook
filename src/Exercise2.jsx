import React from "react";
import { useCallback } from "react";

const ExerciseTwo = () => {
  const removeItem = useCallback((event) => {
    let id = event.target.id;
    document.getElementById(id).innerText = "";
    console.log(id);
  });
  return (
    <>
      <div>
        <h1>Exercise Two</h1>
        {listItem.map((data, index) => (
          <p id={index} onClick={removeItem} key={index}>
            {data}
          </p>
        ))}
      </div>
    </>
  );
};
const listItem = ["apple", "mango", "banana", "grapes", "pear", "orange"];
export default ExerciseTwo;
