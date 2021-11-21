import { useState } from "react"
import './App.css';
import QRCodeCanvas from "./QRCodeCanvas";

function App() {
  const [text, setText] = useState("");

  function clearInput() {
    setText("");
  }

  return (
    <div className="App">
      <div className="container">
        <header><h1>QRCode Maker</h1></header>
        <input type="url" placeholder="Digite ou cole o link que deseja gerar o QRCode" onChange={(element) => {setText(element.target.value)}} value={text}></input>
        <button onClick={clearInput}>Apagar Link</button>
        <QRCodeCanvas text={text}></QRCodeCanvas>
      </div>
    </div>
  );
}

export default App;
