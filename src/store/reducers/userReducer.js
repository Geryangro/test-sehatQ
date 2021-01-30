import types from "../types";

const INITIAL_STATE = {
  user: {},
};

export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
