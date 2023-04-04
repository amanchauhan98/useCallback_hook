import React from "react";
import { useState, useCallback } from "react";

const ExerciseThree = () => {
  const [data, setData] = useState({ fname: "", lname: "" });
  const changeVal = useCallback((event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return { ...preVal, [name]: value };
    });
  });

  return (
    <>
      <h1>Exercise Three</h1>
      <label htmlFor="fname">Firstname : </label>
      <input
        onChange={changeVal}
        name="fname"
        value={data.fname}
        type="text"
        id="fname"
        placeholder="enter your first name"
      />{" "}
      <br />
      <label htmlFor="lname">Lastname : </label>
      <input
        onChange={changeVal}
        name="lname"
        value={data.lname}
        type="text"
        id="lname"
        placeholder="enter your last name"
      />
    </>
  );
};
export default ExerciseThree;
