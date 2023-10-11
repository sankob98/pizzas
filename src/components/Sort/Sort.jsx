import React, { useEffect, useRef, useState } from 'react';
import style from './Sort.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../redux/slices/filterSlice';

const Sort = () => {
  const refSort = useRef(null);

  const sortList = [
    { name: 'популярности', sortValue: 'rating' },
    { name: 'цене', sortValue: 'price' },
    { name: 'алфавиту', sortValue: 'title' },
  ];

  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [open, setOpen] = useState(false);

  const changeSelected = (obj) => {
    setOpen(false);
    dispatch(setSort(obj));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.path.includes(refSort.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={refSort} className={style.menu}>
      <span className={style.menu__title}>Сортировка по:</span>
      <span className={style.selected} onClick={() => setOpen(!open)}>
        {sort.name}
      </span>
      {open && (
        <ul className={style.list}>
          {sortList.map((obj) => (
            <li
              className={obj.name === sort.name ? style.selected : ''}
              key={obj.name}
              onClick={() => changeSelected(obj)}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
