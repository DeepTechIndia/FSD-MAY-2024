import { useState, useEffect } from "react";

function TimestampUpdater() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const [lastUpdated, setLastUpdates] = useState(null);

  useEffect(() => {
    const currentTimestamp = new Date().toLocaleTimeString();
    setLastUpdates(currentTimestamp);
  }, [countA]);

  return (
    <div>
      <p>Count A: {countA}</p>
      <p>Count B: {countB}</p>
      <p>Last Updated : {lastUpdated ? lastUpdated : "Never"}</p>

      <button onClick={() => setCountA(countA + 1)}>Increment Count A</button>
      <button onClick={() => setCountB(countB + 1)}>Increment Count B</button>
    </div>
  );
}

export default TimestampUpdater;
