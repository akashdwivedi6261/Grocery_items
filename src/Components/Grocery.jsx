import React from "react";
import styles from "./Grocery.module.css";
export default function Grocery({ grocery, handleDelete }) {
  return (
    <>
      <div className={styles.main}>
        <h3>{grocery.value}</h3>
        <button
          onClick={() => handleDelete(grocery.id)}
          style={{
            height: "25px",
            marginTop: "1.2rem",
            padding: "2px",
            width: "25%"
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
}
