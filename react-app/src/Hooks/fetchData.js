import { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [dataType, setDataType] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/${dataType}`
        );
        if (!response.ok) {
          throw new Error(`Failed to Fetch ${dataType}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (dataType) {
      fetchData();
    }
  }, [dataType]);

  const handleButtonClick = (type) => {
    setDataType(type);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick("posts")}>Posts</button>
      <button onClick={() => handleButtonClick("users")}>Users</button>

      <button onClick={() => handleButtonClick("comments")}>Comments</button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error:{error}</p>}
      {data.length > 0 && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

// React LifeCycle
// birth grow die

// mounting updating unmounting