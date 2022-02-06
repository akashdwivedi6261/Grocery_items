import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Grocery.module.css";
export default function GroceryInput({ list, setGroceryList }) {
  const [item, setItem] = React.useState({
    value: "",
    id: uuidv4()
  });
  const handleAdd = () => {
    setGroceryList([...list, item]);
    setItem({ ...item, value: "" });
  };
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Enter Grocery"
        value={item.value}
        onChange={(e) =>
          setItem({ ...item, value: e.target.value, id: uuidv4() })
        }
      />
      <button onClick={() => handleAdd()}>AddItem</button>
    </div>
  );
}
