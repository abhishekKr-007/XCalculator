import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      if (input === "") {
        setResult("Error");
      } else {
        const evalResult = eval(input);
        setResult(evalResult);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly className="calculator-input" />
      <div className="result">{result}</div>
      <div className="calculator-buttons">
        {[7, 8, 9, "+"].map((item) => (
          <button onClick={() => handleClick(item)} key={item}>
            {item}
          </button>
        ))}
        {[4, 5, 6, "-"].map((item) => (
          <button onClick={() => handleClick(item)} key={item}>
            {item}
          </button>
        ))}
        {[1, 2, 3, "*"].map((item) => (
          <button onClick={() => handleClick(item)} key={item}>
            {item}
          </button>
        ))}
        {["C", 0, "=", "/"].map((item) => (
          <button
            onClick={() =>
              item === "="
                ? handleCalculate()
                : handleClick(item) || item === "C"
                ? handleClear()
                : handleClick(item)
            }
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Calculator;
