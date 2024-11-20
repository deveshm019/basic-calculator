import React, { useContext } from "react";
import { MyContext } from "../App.js";

const CalScreen = () => {

    const { result,setResult} = useContext(MyContext);

    const handleInputChange = (event) => {
        setResult(event.target.value);
      };

  return (
    <input
          className="cal-screen"
          type="text"
          value={result}
          onChange={handleInputChange}
        />
  )
}

export default CalScreen