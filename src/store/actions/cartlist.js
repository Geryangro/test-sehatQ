import types from "../types";

export const addList = (payload) => (dispatch) => {
  return dispatch({
    type: types.ADD_CART_LIST,
    payload,
  });
};

export const deleteList = (payload) => (dispatch) => {
  return dispatch({
    type: types.DELETE_CART_LIST,
    payload,
  })
}
