import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import trash from "./assets/trash1.png";
import illustration from "./assets/illustration.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [listTransactions, setlistTransactions] = useState([]);
  return (
    <div className="container">
      <div className="principal-infos">
        <img src={logo} alt="logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button>Iniciar</button>
      </div>
      <div className="principal-img">
        <img src={illustration} alt="ilustração" />
      </div>
    </div>
  );
}

export default App;
