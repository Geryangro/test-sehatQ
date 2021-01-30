import types from "../types";

const INITIAL_STATE = {
    detail: {},
};

export const detail = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return state;
  }
};
