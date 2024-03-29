import logo from "./assets/logo.png";
import illustration from "./assets/illustration.svg";
import "./App.css";
import { useState } from "react";
import { Form } from "./Form";

function App() {
  const [listTransactions, setlistTransactions] = useState([]);
  const [dashBoard, setDashBoard] = useState(true);
  function addInfos(newInfos) {
    return setlistTransactions([...listTransactions, newInfos]);
  }
  function removeItem(item) {
    return setlistTransactions(
      listTransactions.filter((element) => element !== item)
    );
  }
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
          addInfos={addInfos}
          removeItem={removeItem}
        />
      )}
    </>
  );
}

export default App;
