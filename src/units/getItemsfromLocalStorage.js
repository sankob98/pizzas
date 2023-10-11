import { countTotalPrice } from './countTotalPrice';

export const getItemsfromLocalStorage = () => {
  let data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = countTotalPrice(items);
  return {
    items,
    totalPrice,
  };
};
