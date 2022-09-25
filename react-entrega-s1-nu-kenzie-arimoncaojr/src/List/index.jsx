import { Card } from "../Card";
export const List = ({
  listTransactions,
  all,
  inputs,
  outputs,
  removeItem,
}) => {
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
