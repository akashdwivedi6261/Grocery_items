import React from "react";
import GroceryInput from "./GroceryInput";
import Grocery from "./Grocery";
export default function GroceryList() {
  const [groceryList, setGroceryList] = React.useState([]);
  const handleDelete = (id) => {
    const newGroceryList = groceryList.filter((item) => item.id !== id);
    setGroceryList(newGroceryList);
  };
  return (
    <>
      <GroceryInput list={groceryList} setGroceryList={setGroceryList} />
      {groceryList.map((grocery) => {
        return (
          <Grocery
            grocery={grocery}
            handleDelete={handleDelete}
            // groceryList={groceryList}
            key={grocery.id}
          />
        );
      })}
    </>
  );
}
