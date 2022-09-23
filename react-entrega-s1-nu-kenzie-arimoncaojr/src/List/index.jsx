import { Card } from "../Card";
export const List = ({ listTransactions }) => {
  return (
    <ul>
      {listTransactions.map((element, index) => (
        <Card transaction={element} key={index} />
      ))}
    </ul>
  );
};
