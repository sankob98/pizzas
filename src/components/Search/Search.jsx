import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';
import style from './Search.module.css';
import debounce from 'lodash.debounce';
import { useState } from 'react';
import { useCallback } from 'react';
import classNames from 'classnames';

const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filter.searchValue);

  const debounceSearch = useCallback(
    debounce((e) => dispatch(setSearchValue(e.target.value)), 250),
    [],
  );

  const clearInput = () => {
    setInput('');
    dispatch(setSearchValue(''));
  };
  const changeSearch = (e) => {
    setInput(e.target.value);
    debounceSearch(e);
  };
  return (
    <div className={style.search}>
      <svg
        className={classNames(style.icon, style.search__icon)}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"></circle>
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"></line>
      </svg>
      <input
        className={style.input}
        type="text"
        placeholder="поиск пицц..."
        onChange={changeSearch}
        value={input}
      />
      {input && (
        <svg
          onClick={clearInput}
          className={classNames(style.icon, style.clear__icon)}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
        </svg>
      )}
    </div>
  );
};

export default Search;
