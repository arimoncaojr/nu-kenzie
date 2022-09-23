export const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="container-total-value">
      <div>
        <h2>Valor Total:</h2>
        <h2>
          $
          {listTransactions
            .reduce(
              (acc, curr) =>
                curr.type === "Entrada"
                  ? parseFloat(curr.value.replace(",", ".")) + parseFloat(acc)
                  : parseFloat(acc) - parseFloat(curr.value.replace(",", ".")),
              0
            )
            .toFixed(2)
            .replace(".", ",")}
        </h2>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};
