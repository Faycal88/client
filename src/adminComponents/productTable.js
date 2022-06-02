import "./styles/table.css";
import { useState } from "react";
import Pagination from "./pagination";
import { useFetch } from "../redux/fetch";
import { getProducts, deleteProduct } from "../redux/features/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import Loading from "../components/Loading/Loading";

function TablePro() {
  const { loading, error } = useFetch(getProducts());
  const { products } = useSelector((state) => ({ ...state.product }));
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(4);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!loading) {
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    return (
      <div>
        <h1>Product Table</h1>
        <div>
          <table
            className="table table-hover table-bordered  "
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Category</th>
                <th scope="col">Image</th>
                <th scope="col">Created At</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product._id}>
                  <th scope="row">{product._id}</th>
                  <td>{product.title}</td>
                  <td>{`${product.price} DZD`}</td>
                  <td>{product.description.substring(0, 20) + "..."}</td>
                  <td>{product.quantity}</td>
                  <td>{product.category}</td>
                  <td>
                    <img
                      style={{ maxWidth: "150px" }}
                      src={product.image}
                      alt="product"
                    />
                  </td>
                  <td>{product.createdAt}</td>
                  <td>
                    <button
                      onClick={() => {
                        navigate(`/admin/Product/${product._id}`);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        dispatch(deleteProduct(product._id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            productPerPage={productPerPage}
            totalProducts={products.length}
            paginate={(pageNumber) => setCurrentPage(pageNumber)}
          />
          <Link to="/admin/Product/new">
            <button>Add new product</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        marginTop: " 2em",
      }}
    >
      <Loading />
    </div>
  );
}

export default TablePro;
