export const countTotalPrice = (items) => {
  return items.reduce((summ, item) => summ + item.price * item.count, 0);
};
