import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './slices/pizzaSlice';
import filterReducer from './slices/filterSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    pizzas: pizzaReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});
