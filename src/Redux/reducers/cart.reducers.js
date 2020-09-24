// Import Action
import { INCREMENT, DECREMENT } from "../action/cart.action";

const initialState = {
  cart: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        cart: state.cart + 1,
      };
    case DECREMENT:
      return {
        ...state,
        cart: state.cart - 1,
      };
    default:
      return state;
  }
};

export default cart;
