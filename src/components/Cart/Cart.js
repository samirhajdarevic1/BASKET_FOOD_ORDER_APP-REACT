import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartProduct from "./CartProduct";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartMealRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartMealAddHandler = (meal) => {
    cartCtx.addItem({ ...meal, amount: 1 });
  };

  const cartMeals = (
    <ul className={styles["cart-meals"]}>
      {cartCtx.items.map((meal) => (
        <CartProduct
          key={meal.id}
          name={meal.name}
          price={meal.price}
          amount={meal.amount}
          onRemove={cartMealRemoveHandler.bind(null, meal.id)}
          onAdd={cartMealAddHandler.bind(null, meal)}
        ></CartProduct>
      ))}
    </ul>
  );

  return (
    <Modal onHideCartHandler={props.onHideCartHandler}>
      {cartMeals}
      <div className={styles.total}>
        <span>Total amount:</span>
        <span>{totalAmount}KM</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles["close-button"]}
          onClick={props.onHideCartHandler}
        >
          Close
        </button>
        {hasItems && <button className={styles["order-button"]}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
