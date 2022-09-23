import logo from "./assets/logo.png";
import illustration from "./assets/illustration.svg";
import "./App.css";
import { useState } from "react";
import { Form } from "./Form";

function App() {
  const [listTransactions, setlistTransactions] = useState([]);
  const [dashBoard, setDashBoard] = useState(true);
  return (
    <>
      {dashBoard ? (
        <div className="container">
          <div className="principal-infos">
            <img src={logo} alt="logo" />
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button type="button" onClick={() => setDashBoard(false)}>
              Iniciar
            </button>
          </div>
          <div className="principal-img">
            <img src={illustration} alt="ilustração" />
          </div>
        </div>
      ) : (
        <Form
          listTransactions={listTransactions}
          setlistTransactions={setlistTransactions}
        />
      )}
    </>
  );
}

export default App;
