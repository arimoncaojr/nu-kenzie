import { Card } from "../Card";
export const List = ({ listTransactions }) => {
  console.log(listTransactions);
  return (
    <ul>
      <Card listTransactions={listTransactions} />
    </ul>
  );
};
