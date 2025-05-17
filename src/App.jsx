import "./App.css";
import { useState } from "react";
import { AppLayout } from "./AppLayout";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <AppLayout
      field={field}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
      setField={setField}
      setCurrentPlayer={setCurrentPlayer}
      setIsDraw={setIsDraw}
      setIsGameEnded={setIsGameEnded}
    />
  );
}

export default App;
