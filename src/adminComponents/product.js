import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "react-paginate";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../redux/features/productSlice";
import TablePro from "./productTable";

function Product() {
  /* const { loading, error } = useFetch(getProducts()); */
  const { products } = useSelector((state) => ({ ...state.product }));

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "2em  2em",
        }}
      >
        <TablePro />
      </div>
      <div className="container">
        <div></div>
      </div>
      <Outlet />
    </div>
  );
}

export default Product;

/* 
  
    
   

  console.log(loading);
  if (!loading) {
    console.log(products);
    return (
      <div>
        <h1>Products Table</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Image</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                  <td>
                    <img
                      style={{ maxWidth: "100px" }}
                      src={product.image}
                      alt="product_img"
                    />
                  </td>
                  <td>{product.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="container">
          <div>
            <Link to="/admin/Product/new">
              <button>Add new product</button>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    );
  }
  return <div>Loading...</div>;
}
export default Product; */
