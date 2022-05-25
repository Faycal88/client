import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import ProductReducer from "./features/productSlice";
import CartReducer from "./features/cartSlice";
import articleSlice from "./features/articleSlice";
import usersSlice from "./features/usersSlice";
/* import ArticleReducer from "./features/articleSlice";
import ProductReducer from "./features/productSlice"; */

export default configureStore({
  reducer: {
    auth: AuthReducer,
    product: ProductReducer,
    cart: CartReducer,
    article: articleSlice,
    users: usersSlice,
  },
});
