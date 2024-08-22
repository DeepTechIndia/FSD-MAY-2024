import { useMemo, useState } from "react";

function CounterApp() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementCountOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementCountTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i <= 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div
      className="container d-flex   flex-column justify-content-center   align-items-center "
      style={{ height: "100vh" }}
    >
      <div>
        <button className="btn btn-primary my-2" onClick={incrementCountOne}>
          Counter One : {counterOne}
          <span>{isEven ? "even" : "odd"}</span>
        </button>
      </div>

      <div>
        <button className="btn btn-primary my-2" onClick={incrementCountTwo}>
          Counter Two : {counterTwo}
        </button>
      </div>
    </div>
  );
}

export default CounterApp;

// useMemo => Memoization => texhnique used to cache the result

// useMemo(()=>{}, [])
