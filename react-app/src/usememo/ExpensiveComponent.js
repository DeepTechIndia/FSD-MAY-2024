import { useMemo, useState } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  //   const expensiveValue = () => {
  //     console.log("Calculating expensive value");
  //     let result = 0;
  //     for (let i = 0; i < 1000000000; i++) {
  //       result += i;
  //     }
  //     return result;
  //   };

  const expensiveValue = useMemo(() => {
    console.log("Calculating expensive value");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []);

  return (
    <div>
      <p>Expensive Value : {expensiveValue}</p>
      <p>Conut : {count}</p>
      <p>Text : {text}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setText(text + "!")}>Change text</button>
    </div>
  );
}

export default ExpensiveComponent;
