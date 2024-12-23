import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="write something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={()=> alert(inputValue)}>
        Show name
      </button>
    </div>
  );
};

export default App;
