import types from "../types";

const INITIAL_STATE = {
    wishList: [],
};

export const wishList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_WISH_LIST:
      return {
        ...state,
        wishList: [ ...state.wishList, action.payload],
      };
    case types.DELETE_WISH_LIST:
      return {
        wishList: [
          ...state.wishList.filter(wishList => wishList !== action.payload)
        ]
      };
    default:
      return state;
  }
};
