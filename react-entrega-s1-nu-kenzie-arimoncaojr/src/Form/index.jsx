import { useState } from "react";
import App from "../App";
import logo from "../assets/logo2.png";
import noCard from "../assets/NoCard.png";
import { List } from "../List";
import { TotalMoney } from "../TotalMoney";
export const Form = ({ listTransactions, addInfos }) => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valorInput, setValorInput] = useState();
  const [typeSelect, setTypeSelect] = useState("");
  const [dashBoard, setDashBoard] = useState(true);

  return (
    <>
      {dashBoard ? (
        <div className="container-secondary">
          <header className="menu">
            <img src={logo} alt="" />
            <button type="button" onClick={() => setDashBoard(false)}>
              Início
            </button>
          </header>
          <div className="container-form">
            <form
              onSubmit={(event) =>
                addInfos(
                  {
                    description: descriptionInput,
                    type: typeSelect,
                    value: valorInput,
                  },
                  event.preventDefault()
                )
              }
            >
              <div className="div-form">
                <label>Descrição</label>
                <input
                  type="text"
                  placeholder="Digite aqui sua descrição"
                  onChange={(event) => setDescriptionInput(event.target.value)}
                />
                <p>Ex: Compra de roupas</p>
                <div className="valor">
                  <div className="valor-input">
                    <label>Valor</label>
                    <input
                      type="text"
                      placeholder="0"
                      onChange={(event) => setValorInput(event.target.value)}
                    />
                  </div>
                  <div className="type-select">
                    <label>Tipo de valor</label>
                    <select
                      onChange={(event) => setTypeSelect(event.target.value)}
                    >
                      <option value="">Selecione</option>
                      <option value="Entrada">Entrada</option>
                      <option value="Saída">Saída</option>
                    </select>
                  </div>
                </div>
                <button type="submit">Inserir Valor</button>
              </div>
            </form>
            <div className="container-result-form">
              <div className="container-list">
                <h2>Resumo Financeiro</h2>
                <nav>
                  <button>Todos</button>
                  <button>Entradas</button>
                  <button>Despesas</button>
                </nav>
              </div>
              {listTransactions.length > 0 ? (
                <div className="container-loading">
                  {" "}
                  <List listTransactions={listTransactions} />{" "}
                </div>
              ) : (
                <div className="container-loading">
                  <h2>Você ainda não possui nenhum lançamento</h2>
                  <img src={noCard} alt="sem transações" />
                </div>
              )}
            </div>
          </div>
          <TotalMoney listTransactions={listTransactions} />
        </div>
      ) : (
        <App />
      )}
    </>
  );
};
