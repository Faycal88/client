import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import ProductReducer from "./features/productSlice";
import CartReducer from "./features/cartSlice";
import articleSlice from "./features/articleSlice";
import usersSlice from "./features/usersSlice";
import collectionSlice from "./features/collectionSlice";
import categorySlice from "./features/categorySlice";
import orderSlice from "./features/orderSlice";
import subsriberSlice from "./features/newsletterSlice";
/* import ArticleReducer from "./features/articleSlice";
import ProductReducer from "./features/productSlice"; */

export default configureStore({
  reducer: {
    auth: AuthReducer,
    product: ProductReducer,
    cart: CartReducer,
    article: articleSlice,
    users: usersSlice,
    collection: collectionSlice,
    category: categorySlice,
    order: orderSlice,
    subscriber: subsriberSlice,
  },
});
