import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartMealIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartMeal = state.items[existingCartMealIndex];
    let updatedItems;

    if (existingCartMeal) {
      const updatedItem = {
        ...existingCartMeal,
        amount: existingCartMeal.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartMealIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartMealIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingMeal = state.items[existingCartMealIndex];
    const updatedTotalAmount = state.totalAmount - existingMeal.price;
    let updatedItems;
    if (existingMeal.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingMeal, amount: existingMeal.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartMealIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
