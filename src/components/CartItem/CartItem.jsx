import React from 'react';
import style from './CartItem.module.css';
import cn from 'classnames';
import { minusItem, removeItems, plusItem } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ imageUrl, title, price, type, count, id }) => {
  const dispatch = useDispatch();
  const itemPrice = price * count;
  return (
    <div className={style.block}>
      <div className={style.info}>
        <div>
          <img src={imageUrl} alt="pizza" className={style.pizza_icon} />
        </div>
        <div className={style.info__text}>
          <h3>{title}</h3>
          <p>{type}</p>
        </div>
      </div>
      <div className={style.countBlock}>
        {/* minus button  */}
        <div className={style.count}>
          <button
            disabled={count > 1 ? false : true}
            className={style.btn}
            onClick={() => dispatch(minusItem(id))}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="rgb(39, 203, 203)"></path>
            </svg>
          </button>
          <span>{count}</span>
          {/* plus button */}
          <button className={style.btn} onClick={() => dispatch(plusItem(id))}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="rgb(39, 203, 203)"></path>
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="rgb(39, 203, 203)"></path>
            </svg>
          </button>
        </div>
        <div className={style.price}>
          <span>{itemPrice} ₽</span>
        </div>
        <div className={style.delete}>
          {/* remove button */}
          <button
            className={cn(style.btn, style.btn__remove)}
            onClick={() => dispatch(removeItems(id))}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                fill="#ddd"></path>
              <path
                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                fill="#ddd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
