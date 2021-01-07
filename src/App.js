import { useState } from "react";
import "./App.css";
import { Sign } from "./components/sign";

function App() {
  const [name, setName] = useState('Your name');
  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <hr />
      <Sign name={name} />
    </div>
  );
}

export default App;
