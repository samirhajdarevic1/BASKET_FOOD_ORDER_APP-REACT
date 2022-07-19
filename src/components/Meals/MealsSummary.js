import React from 'react';
import styles from './MealsSummary.module.css';

const MealsSummary = (props) => {
  return (
    <div className={styles['meals-summary']}>
      <h1>
        The Best Fast <span>Food</span> in Your City
      </h1>
      <p>
        What is your favourite meal? Chose something from our broad selection of
        meals that we have available and enjoy your time with favourite food
      </p>
      <h3>ORDER YOUR FOOD HERE</h3>
      <p>
        <i className={styles['arrow']}></i>
      </p>
    </div>
  );
};

export default MealsSummary;
