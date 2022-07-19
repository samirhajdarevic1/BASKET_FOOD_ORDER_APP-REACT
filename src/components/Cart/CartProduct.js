import React from "react";
import styles from "./CartProduct.module.css";

const CartProduct = (props) => {
  return (
    <li className={styles["cart-product"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{props.price}</span>
          <span className={styles.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartProduct;
