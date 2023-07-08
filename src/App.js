import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div>
      <Header mode={mode} toggleMode={toggleMode} />

      <Body mode={mode} />
    </div>
  );
}

export default App;
