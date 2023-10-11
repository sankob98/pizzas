import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 0,
  searchValue: '',
  sort: { name: 'популярности', sortValue: 'rating' },
};

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategory, setSort, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
