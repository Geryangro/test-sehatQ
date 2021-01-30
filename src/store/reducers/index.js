import { combineReducers } from "redux";
import { user } from "./userReducer";
import { detail } from "./detailReducer";
import { cartList } from "./cartListReducer";
import { wishList } from "./wishListReducer";

const reducers = combineReducers({
  user,
  detail,
  cartList,
  wishList,
});

export default reducers;
