import axios from "axios";

const API = axios.create(
  {
    baseURL: "http://127.0.0.1:4000/",
  },
  {
    timeout: 10000,
  }
);

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signin = (FormData) => API.post("users/login", FormData);
export const signup = (FormData) => API.post("users/register", FormData);
export const Gsignup = (FormData) => API.post("users/googlesign", FormData);
export const Fsignup = (FormData) => API.post("users/facebooksign", FormData);
export const cart = (productId) => API.patch("users/cart", productId);
export const getUsers = () => API.get("users/getUsersList");
export const getCart = () => API.get("users/getCart");
export const removeFromBag = (productId) =>
  API.patch("users/removeFromBag", productId);
export const update = (FormData) => API.patch("users/updateUser", FormData);
export const UpdatePass = (FormData) => API.patch("users/updatePass", FormData);

export const addProduct = (FormData) =>
  API.post("products/addProduct", FormData);

export const getProducts = () => API.get("products/getProducts");
export const getOne = (id) => API.get(`products/getProduct/${id}`);

export const FindEditProduct = ({ id, data }) =>
  API.patch(`products/findEditProduct/${id}`, data);

export const deleteProduct = (id) => API.delete(`products/deleteProduct/${id}`);

export const addOrder = (FormData) => API.post("orders/addOrder", FormData);

export const getOrders = () => API.get("orders/getOrders");

export const addArticle = (FormData) =>
  API.post("articles/addArticle", FormData);

export const getArticles = () => API.get("articles/getArticles");

export const getArticleBySlug = (slug) =>
  API.get(`articles/getArticleBySlug/${slug}`);

export const getArticleProduct = (id) =>
  API.get(`articles/getArticleProduct/${id}`);

export const addCollection = (FormData) =>
  API.post("collections/addCollection", FormData);

export const getCollections = () => API.get("collections/getCollections");

export const getProductsbyCollection = (name) =>
  API.get(`collections/getProductsbyCollection/${name}`);

export const deleteCollection = (id) =>
  API.delete(`collections/deleteCollection/${id}`);

export const addCategory = (FormData) =>
  API.post("categories/addCategory", FormData);

export const getCategories = () => API.get("categories/");

export const deleteCategory = (id) =>
  API.delete(`categories/deleteCategory/${id}`);

export const addSubsriber = (FormData) =>
  API.post("subscribers/addSubsriber", FormData);

/* export const addArticle = (FormData) => API.post("/article/add", FormData);
export const editArticle = (FormData) =>
  API.post("/article/getAndEdit", FormData);

export const addProduct = (FormData) => API.post("/product/add", FormData);
export const editProduct = (FormData) =>
  API.post("/product/getAndEdit", FormData);
export const getProduct = (FormData) => API.post("/product/get", FormData);
export const getProductById = (FormData) =>
  API.post("/product/getById", FormData);
export const getProductByCategory = (FormData) =>
  API.post("/product/getByCategory", FormData);
export const deleteProduct = (FormData) =>
  API.post("/product/delete", FormData); */
