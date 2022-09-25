import { Card } from "../Card";
export const List = ({
  listTransactions,
  all,
  inputs,
  outputs,
  removeItem,
}) => {
  console.log(listTransactions);
  return (
    <ul>
      <Card
        listTransactions={listTransactions}
        all={all}
        inputs={inputs}
        outputs={outputs}
        removeItem={removeItem}
      />
    </ul>
  );
};
