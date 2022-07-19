import React from "react";
import Card from "../Card/Card";
import SingleMeal from "./SingleMeal/SingleMeal";
import styles from "./AvailableMeals.module.css";

const meals = [
  {
    id: "m1",
    name: "Baklava",
    description: "The best of Bosnian sweets",
    price: 2,
  },
  {
    id: "m2",
    name: "Piletina",
    description: "Delicious chicken",
    price: 4,
  },
  {
    id: "m3",
    name: "Riza",
    description: "Delicious rice",
    price: 3.5,
  },
  {
    id: "m4",
    name: "Sarma",
    description: "Traditional Bosnian food",
    price: 4,
  },
];
const AvailableMelas = (props) => {
  const mealList = meals.map((meal) => (
    <SingleMeal
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></SingleMeal>
  ));
  return (
    <section className={styles["meals-list"]}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMelas;
