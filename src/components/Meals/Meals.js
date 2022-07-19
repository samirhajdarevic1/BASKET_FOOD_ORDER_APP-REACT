import React from "react";
import AvailableMelas from "./AvailableMelas";
import MealsSummary from "./MealsSummary";
import basketImage from "../../assets/basket.jpg";
import styles from "./Meals.module.css";

function Meals(props) {
  return (
    <div>
      <div className={styles["main-image"]}>
        <img src={basketImage} alt="Basket sandwich"></img>
      </div>
      <MealsSummary />
      <AvailableMelas />
    </div>
  );
}

export default Meals;
