export const Card = ({ listTransactions }) => {
  console.log(listTransactions);
  return (
    <>
      {listTransactions.map((e, i) => (
        <li className={e.type} key={i}>
          <div>
            <h2>{e.description}</h2>
            <p>{e.type}</p>
            <p>R$ {e.value}</p>
            <button></button>
          </div>
        </li>
      ))}
    </>
  );
};
