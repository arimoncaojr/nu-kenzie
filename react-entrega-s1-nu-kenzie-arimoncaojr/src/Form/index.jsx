import { useState } from "react";
import logo from "../assets/logo2.png";
import noCard from "../assets/NoCard.png";
import { List } from "../List";
import { TotalMoney } from "../TotalMoney";
export const Form = ({ listTransactions, setListTransactions }) => {
  const [descriptionInput, setDescriptionInput] = useState("");
  const [valorInput, setValorInput] = useState();
  const [typeSelect, setTypeSelect] = useState("");

  return (
    <div className="container-secondary">
      <header className="menu">
        <img src={logo} alt="" />
        <button>Início</button>
      </header>
      <div className="container-form">
        <form
          onSubmit={(event) =>
            setListTransactions(
              {
                description: descriptionInput,
                type: typeSelect,
                value: valorInput,
              },
              event.preventDefault()
            )
          }
        >
          <label>Descrição</label>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescriptionInput(event.target.value)}
          />
          <p>Ex: Compra de roupas</p>
          <div className="valor">
            <label>Valor</label>
            <input
              type="text"
              placeholder="0"
              onChange={(event) => setValorInput(event.target.value)}
            />
            <label>Tipo de valor</label>
            <select
              name=""
              id=""
              onSelect={(event) =>
                setTypeSelect(event.target.selectedIndex.textContent)
              }
            >
              <option value="">Entrada</option>
              <option value="">Saída</option>
            </select>
          </div>
          <button type="submit">Inserir Valor</button>
        </form>
        <div className="container-form-secundary">
          <div className="container-list">
            <h2>Resumo Financeiro</h2>
            <nav>
              <button>Todos</button>
              <button>Entradas</button>
              <button>Despesas</button>
            </nav>
          </div>
          {listTransactions.length > 0 ? (
            <List listTransactions={listTransactions} />
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
  );
};
