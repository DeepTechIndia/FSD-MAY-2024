// useEffect => fetching data, manually changing the DOM

// useEffect(() => {}, [dependencies]);

import { useEffect, useState } from "react";

function CounterComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Rendered");
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>Incerement</button>
    </div>
  );
}

export default CounterComponent;
