import React, { useContext } from "react";
import { MyContext } from "../App.js";
import { handleNumber } from "../utils/functions.js";

const OperationButton = (props) => {

    const { decimal,operation,setResult,setOperation,setDecimalValid} = useContext(MyContext);

    const handleOperation = (operator) => {
        if (operation && decimal) {
          setResult((result) => result + " " + operator + " ");
          setOperation(false);
          setDecimalValid(true);
        }
      };

  return (
    <button className="operation" onClick={() => handleOperation(props.value)}>
            {props.value}
          </button>
  )
}

export default OperationButton