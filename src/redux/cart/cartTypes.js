export const CartActionTypes = {};

[
  'TOGGLE_CART_HIDDEN',
  'ADD_ITEM',
  'CLEAR_ITEM_FROM_CART',
  'REMOVE_ITEM'
].forEach(action => {
  CartActionTypes[action] = action;
});
