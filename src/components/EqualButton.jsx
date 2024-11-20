import React, { useContext } from "react";
import { MyContext } from "../App.js";

const EqualButton = () => {

    const { result,setResult} = useContext(MyContext);

    const handleResult = () => {
        var currResult = result.split(" ");
        var operations = currResult.length / 2 - 0.5;
        while (operations > 0) {
          if (currResult.includes("/")) {
            const index = currResult.indexOf("/");
            const tempResult =
              parseFloat(currResult[index - 1]) / parseFloat(currResult[index + 1]);
            currResult.splice(index - 1, 1);
            currResult.splice(index, 1);
            currResult.splice(index - 1, 1, tempResult);
          } else if (currResult.includes("x")) {
            const index = currResult.indexOf("x");
            const tempResult =
              parseFloat(currResult[index - 1]) * parseFloat(currResult[index + 1]);
            currResult.splice(index - 1, 1);
            currResult.splice(index, 1);
            currResult.splice(index - 1, 1, tempResult);
          } else if (currResult.includes("+")) {
            const index = currResult.indexOf("+");
            const tempResult =
              parseFloat(currResult[index - 1]) + parseFloat(currResult[index + 1]);
            currResult.splice(index - 1, 1);
            currResult.splice(index, 1);
            currResult.splice(index - 1, 1, tempResult);
          } else {
            const index = currResult.indexOf("-");
            const tempResult =
              parseFloat(currResult[index - 1]) - parseFloat(currResult[index + 1]);
            currResult.splice(index - 1, 1);
            currResult.splice(index, 1);
            currResult.splice(index - 1, 1, tempResult);
          }
          operations--;
        }
        setResult(currResult);
      };

  return (
    <button className="equal" onClick={() => handleResult()}>
            =
          </button>
  )
}

export default EqualButton