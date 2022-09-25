export const Card = ({
  listTransactions,
  all,
  inputs,
  outputs,
  removeItem,
}) => {
  return (
    <>
      {all &&
        listTransactions.map((e, i) => (
          <li className={e.type} key={i}>
            <div>
              <div className="description-div">
                <h2>
                  {e.description}
                  <p>{e.type}</p>
                </h2>
              </div>
              <div className="final-div">
                <p>R$ {e.value}</p>
                <button type="button" onClick={() => removeItem(e)}></button>
              </div>
            </div>
          </li>
        ))}
      {inputs &&
        listTransactions.map(
          (e, i) =>
            e.type === "Entrada" && (
              <li className={e.type} key={i}>
                <div className="description-div">
                  <h2>
                    {e.description}
                    <p>{e.type}</p>
                  </h2>
                </div>
                <div className="final-div">
                  <p>R$ {e.value}</p>
                  <button type="button" onClick={() => removeItem(e)}></button>
                </div>
              </li>
            )
        )}
      {outputs &&
        listTransactions.map(
          (e, i) =>
            e.type === "Saída" && (
              <li className={e.type} key={i}>
                <div className="description-div">
                  <h2>
                    {e.description}
                    <p>{e.type}</p>
                  </h2>
                </div>
                <div className="final-div">
                  <p>R$ {e.value}</p>
                  <button type="button" onClick={() => removeItem(e)}></button>
                </div>
              </li>
            )
        )}
    </>
  );
};
