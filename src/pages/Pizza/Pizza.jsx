import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import style from './Pizza.module.css';
import '../../App.css';
import cn from 'classnames';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://62e395043c89b95396cb6c94.mockapi.io/items/${params.id}`)
      .then(({ data }) => setPizza(data))
      .catch((err) => {
        alert(err.message);
        navigate('/');
      });
  }, []);
  return (
    <div>
      {pizza && (
        <>
          <img className={style.img} src={pizza.imageUrl} alt="pizza" />
          <h2 className={style.title}>{pizza.title}</h2>
          <p className={style.price}>{pizza.price} ₽</p>
          <Link className={cn(style.btn, 'btn')} to="/">
            Назад
          </Link>
        </>
      )}
    </div>
  );
};

export default Pizza;
