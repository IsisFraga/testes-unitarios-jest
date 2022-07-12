import { useState } from "react";

function App() {
  const [list, setList] = useState(["Eduardo", "João", "Emerson"]);
  const [newItem, setNewItem] = useState("");

  function addToList() {
    setList((state) => [...state, newItem]);
  }

  return (
    <>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="novo item"
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
