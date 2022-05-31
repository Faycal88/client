import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  NeedLogin,
  PrivateRoute,
  PublicRoute,
  ShowHeader,
} from "./components/Private/protectedRoute";
import Register from "./pages/register";
import Login from "./pages/login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/features/authSlice";
import Landing from "./pages/home";
import Dashboard from "./adminComponents/adminHome";
import Product from "./adminComponents/product";
import AddProduct from "./adminComponents/addProduct";
import EditProduct from "./adminComponents/editProduct";
import Shop from "./pages/shop";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/product";
import Profile from "./pages/profile";
import AddArticle from "./adminComponents/addArticle";
import Article from "./pages/article";
import VisitUs from "./pages/visitUs";
import ArticleTable from "./adminComponents/articleTable";
import UsersTable from "./adminComponents/userTable";
import NotFound from "./components/NotFound/notFound";
import AddCollection from "./adminComponents/addCollection";
import EditArticle from "./adminComponents/editArticle";
import Categories from "./adminComponents/categories";
import ShowOrders from "./adminComponents/orders";
import CustomFooter from "./components/footer/footer";
function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, []);
  return (
    <BrowserRouter>
      <ToastContainer />
      {/* <ShowHeader path="/:url" children={<Header />}></ShowHeader> */}
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/stores" element={<VisitUs />} />
        <Route
          path="/admin"
          element={<PrivateRoute>{<Dashboard />}</PrivateRoute>}
        >
          <Route path="Product" element={<Product />}>
            <Route path="new" element={<AddProduct />} />
            <Route path=":id" element={<EditProduct />} />
          </Route>
          <Route path="article" element={<ArticleTable />}>
            <Route path="new" element={<AddArticle />} />
            <Route path=":id" element={<EditArticle />} />
          </Route>
          <Route path="user" element={<UsersTable />}>
            {/* <Route path="new" element={<AddArticle />} /> */}
          </Route>
          <Route path="collections" element={<AddCollection />}></Route>
          <Route path="Categories" element={<Categories />}></Route>
          <Route path="orders" element={<ShowOrders />}></Route>
        </Route>
        <Route
          path="/Register"
          element={<PublicRoute>{<Register />}</PublicRoute>}
        />
        <Route
          path="/login"
          element={<PublicRoute> {<Login />} </PublicRoute>}
        />
        <Route path="/bag" element={<NeedLogin> {<Checkout />} </NeedLogin>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
