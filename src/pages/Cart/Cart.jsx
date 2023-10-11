import React from 'react';
import { Link } from 'react-router-dom';
import style from './Cart.module.css';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/CartItem/CartItem';
import CartEmpty from '../../components/CartEmpty/CartEmpty';
import cn from 'classnames';
import { clearCart } from '../../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((summ, item) => summ + item.count, 0);

  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <div className={style.cart}>
      <div className={style.header}>
        <h2>Корзина</h2>
        <div className={style.clean} onClick={() => dispatch(clearCart())}>
          Очистить корзину
        </div>
      </div>
      {items.map((pizza) => (
        <CartItem {...pizza} key={pizza.id} />
      ))}
      <div className={style.order__info}>
        <div>
          Всего пицц: <div>{totalCount} шт.</div>
        </div>
        <div>
          Сумма заказа: <div className={style.price}>{totalPrice} ₽</div>
        </div>
      </div>
      <div className={style.footer}>
        <Link to="/" className={cn(style.btn, style.btn__back, 'btn')}>
          Назад
        </Link>
        <div className={cn(style.btn, style.btn__pay, 'btn')}>Оплатить сейчас</div>
      </div>
    </div>
  );
};
export default Cart;
