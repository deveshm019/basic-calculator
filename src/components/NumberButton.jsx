import React, { useContext } from "react";
import { MyContext } from "../App.js";

const NumberButton = (props) => {

    const { setResult,setDecimal,setOperation} = useContext(MyContext);

    const handleNumber = (num) => {
        setResult((result) => result + num);
        setDecimal(true);
        setOperation(true);
      };
  return (
    <button onClick={() => handleNumber(props.value)}>{props.value}</button>
  )
}

export default NumberButton