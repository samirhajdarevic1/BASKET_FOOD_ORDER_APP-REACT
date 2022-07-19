import React from "react";
import styles from "./SingleMealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

function SingleMealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    //value is always a string
    const enteredAmount = amountInputRef.current.value;
    console.log(typeof enteredAmount);
    //converting value into number:
    const enteredAmountNumber = +enteredAmount;
    console.log(typeof enteredAmountNumber);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default SingleMealItemForm;
