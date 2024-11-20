import React, { useContext } from "react";
import { MyContext } from "../App.js";

const DecimalButton = () => {

    const { decimal,operation,decimalValid,setResult,setDecimal,setDecimalValid} = useContext(MyContext);

    const handleDecimal = () => {
        if (decimal && operation && decimalValid) {
          setResult((result) => result + ".");
          setDecimal(false);
          setDecimalValid(false);
        }
      };

  return (
    <button onClick={() => handleDecimal()}>.</button>
  )
}

export default DecimalButton