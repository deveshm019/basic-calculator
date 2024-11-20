import "./App.css";
import { useState, createContext } from "react";
import NumberButton from "./components/NumberButton";
import OperationButton from "./components/OperationButton";
import DecimalButton from "./components/DecimalButton";
import ClearButton from "./components/ClearButton";
import EqualButton from "./components/EqualButton";
import CalScreen from "./components/CalScreen";

export const MyContext = createContext();

function App() {
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState(false);
  const [decimal, setDecimal] = useState(false);
  const [decimalValid, setDecimalValid] = useState(true);

  return (
    <>
      <div className="cal-body">
        <MyContext.Provider
          value={{
            result,
            decimal,
            operation,
            decimalValid,
            setResult,
            setDecimal,
            setOperation,
            setDecimalValid,
          }}
        >
          <CalScreen />

          <div className="cal-panel">
            <NumberButton value={7} />
            <NumberButton value={8} />
            <NumberButton value={9} />

            <OperationButton value={"/"} />

            <NumberButton value={4} />
            <NumberButton value={5} />
            <NumberButton value={6} />

            <OperationButton value={"x"} />

            <NumberButton value={1} />
            <NumberButton value={2} />
            <NumberButton value={3} />

            <OperationButton value={"-"} />

            <NumberButton value={0} />

            <DecimalButton />

            <ClearButton />

            <OperationButton value={"+"} />

            <EqualButton />
          </div>
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
