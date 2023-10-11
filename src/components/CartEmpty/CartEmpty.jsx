import React from 'react';
import style from './CartEmpty.module.css';
import { Link } from 'react-router-dom';
import cart from '../../assets/shopping_cart_014.jpg';

const CartEmpty = () => {
  return (
    <div className={style.cart}>
      <h2 className={style.header}>Ваша корзина пуста</h2>
      <p className={style.text}>
        Воспользуйтесь поиском на главной странице, чтобы найти нужную пиццу
      </p>
      <img className={style.img} src={cart} alt="cart" />
      <Link to="/" className={style.link}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default CartEmpty;
