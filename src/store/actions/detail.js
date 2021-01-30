import types from "../types";

export const setDetail = (payload) => (dispatch) => {
  return dispatch({
    type: types.SET_DETAIL,
    payload,
  });
};
