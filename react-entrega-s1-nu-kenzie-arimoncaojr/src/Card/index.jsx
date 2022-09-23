import trash from "../assets/trash1.png";
export const Card = ({ transaction, key }) => {
  return (
    <li key={key}>
      <h2>{transaction.description}</h2>
      <p>{transaction.type}</p>
      <p>{transaction.value}</p>
      <button>
        <img src={trash} alt="lixeira" />
      </button>
    </li>
  );
};
