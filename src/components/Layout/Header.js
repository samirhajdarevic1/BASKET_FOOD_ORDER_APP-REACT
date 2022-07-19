import React from 'react';
import styles from './Header.module.css';
import basketImage from '../../assets/basket.jpg';
import ChartButton from './ChartButton';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1> Basket food </h1> <ChartButton onShowCart={props.onShowCart} />{' '}
      </header>{' '}
    </>
  );
};

export default Header;
