import React from "react";
import styles from "./ChartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const ChartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  return (
    <button className={styles["chart-button"]} onClick={props.onShowCart}>
      Your meals
      <span className={styles["meals-quantity"]}>{numberOfCartItems}</span>
    </button>
  );
};

export default ChartButton;
