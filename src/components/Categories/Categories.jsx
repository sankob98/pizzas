import React, { useState } from 'react';
import style from './Categories.module.css';
import classnames from 'classnames';

const Categories = ({ changeCategoryId, active }) => {
  const listCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div>
      <ul className={style.list}>
        {listCategories.map((item, ind) => (
          <li
            className={classnames(active === ind ? style.active : '', style.list__item)}
            key={item}
            onClick={() => changeCategoryId(ind)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
