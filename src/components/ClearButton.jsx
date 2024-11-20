import React, { useContext } from "react";
import { MyContext } from "../App.js";

const ClearButton = () => {

    const { setResult} = useContext(MyContext);

    const clearScreen = () => {
        setResult("");
      };

  return (
    <button className="clear" onClick={() => clearScreen()}>
            C
          </button>
  )
}

export default ClearButton