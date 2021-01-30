import types from "../types";

export const setUser = (payload) => (dispatch) => {
  return dispatch({
    type: types.SET_USER,
    payload,
  });
};
