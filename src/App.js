import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onHideCartHandler={hideCartHandler} />}
      <Header
        onShowCart={showCartHandler}
        onHideCartHandler={hideCartHandler}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
