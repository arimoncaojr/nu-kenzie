export const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="container-total-value">
      <div>
        <h2>Valor Total:</h2>
        <h2>{listTransactions.reduce((acc, curr) => curr.value + acc, 0)}</h2>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};
