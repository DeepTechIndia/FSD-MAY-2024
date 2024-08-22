// Hooks => react functions => StaticRange, lifecycle Method, context

// hooks state => some value manage the value

// useState
// useEffect
// useContext
// useReducer
// useref
// useCallback
// useMemo

// useState => add state to functional component => returns [1, 2] => current state, function=> state

// const [state, setState] = useState(initailValue)

import { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>Count : {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </>
//   );
// };

// export default Counter;

const App = () => {
  const [name, setName] = useState("");
  return (
    <>
      <p>Hello, {name}</p>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default App;

// diff between state and props

// props are data => passed from parent to child component
// immutable
// controlled by parent component
// state => managed within the component
// => mutable setstate
// => owned and contrlled by the component itself
