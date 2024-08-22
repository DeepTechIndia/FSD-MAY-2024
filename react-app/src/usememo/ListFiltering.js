import { useMemo, useState } from "react";

function ItemList() {
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
  ]);

  const [showDetails, setShowDetails] = useState(false);

  const filteredItems = useMemo(() => {
    console.log("Filtering Items");
    return items.filter((item) =>
      item.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter Items"
      />
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Deatils" : "Show Details"}
      </button>

      {showDetails && (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ItemList;
