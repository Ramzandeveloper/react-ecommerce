import { cartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";
const initialState = {
  hidden: true,
  cartItem: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
