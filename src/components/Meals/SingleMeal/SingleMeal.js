import React from "react";
import styles from "./SingleMeal.module.css";
import SingleMealItemForm from "./SingleMealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

function SingleMeal(props) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles["list-item"]} id={props.id}>
      <div>
        <h3 className={styles["item-name"]}>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>Price: {props.price} KM</div>
      </div>
      <div>
        <SingleMealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default SingleMeal;
