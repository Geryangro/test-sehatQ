import types from "../types";

export const addWishList = (payload) => (dispatch) => {
  return dispatch({
    type: types.ADD_WISH_LIST,
    payload,
  });
};

export const deleteWishList = (payload) => (dispatch) => {
  return dispatch({
    type: types.DELETE_WISH_LIST,
    payload,
  })
}
