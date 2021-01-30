import login from "@pages/login";
import home from "@pages/home";
import detail from "@pages/detail";
import cartpage from "@pages/cartpage";
import wishlist from "@pages/wishlist";

const routes = [
  {
    name: "login",
    path: "/",
    exact: true,
    component: login,
  },
  {
    name: "home",
    path: "/home",
    exact: true,
    component: home,
  },
  {
    name: "detail",
    path: "/detail/:name",
    exact: true,
    component: detail,
  },
  {
    name: "cartpage",
    path: "/cartpage",
    exact: true,
    component: cartpage,
  },
  {
    name: "wishlist",
    path: "/wishlist",
    exact: true,
    component: wishlist,
  }
]

export default routes
