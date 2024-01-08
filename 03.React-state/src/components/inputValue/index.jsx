import React,{useState} from "react";

const InputValue = ({ count, setCount }) => {
  const [inputValue, setInputValue] = useState(0)
  return (
    <div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.valueAsNumber)}
      />
      <button onClick={() => setCount(count + inputValue)}>Inc by Value</button>
    </div>
  );
};

export default InputValue;
