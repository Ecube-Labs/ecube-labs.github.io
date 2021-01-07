import { useState } from "react";
import "./App.css";
import { Sign } from "./components/sign";

function App() {
  const [name, setName] = useState("Your name");

  const copyToClipboard = () => {
    const elMailSign = document.getElementById("mail-sign");
    const range = document.createRange();
    const sel = window.getSelection();
    sel.removeAllRanges();

    try {
      range.selectNodeContents(elMailSign);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(elMailSign);
      sel.addRange(range);
    }

    document.execCommand("copy");
  };

  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <button onClick={copyToClipboard}>copy</button>
      <hr />
      <Sign name={name} />
    </div>
  );
}

export default App;
