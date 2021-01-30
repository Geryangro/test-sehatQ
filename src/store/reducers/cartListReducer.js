import types from "../types";

const INITIAL_STATE = {
    cartList: [],
};

export const cartList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_CART_LIST:
      return {
        ...state,
        cartList: [ ...state.cartList, action.payload],
      };
    case types.DELETE_CART_LIST:
      return {
        cartList: [
          ...state.cartList.filter(cartList => cartList !== action.payload)
        ]
      };
    default:
      return state;
  }
};
