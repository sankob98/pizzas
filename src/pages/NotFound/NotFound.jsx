import React from 'react';
import style from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={style.block}>
      <h1 className={style.title}>Ничего ни найдено</h1>
      <p className={style.text}>данная страница не существует</p>
    </div>
  );
};

export default NotFound;
