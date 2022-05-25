import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../redux/features/productSlice";
import { toast } from "react-toastify";
import { FindEditProduct } from "../redux/features/productSlice";

function EditProduct() {
  const [error, setError] = useState(null);
  const [initProduct, setInitProduct] = useState(
    useSelector((state) => state.product.product)
  );

  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    let res = dispatch(getProduct(id));
    console.log(res);
  }, [id]);
  console.log(loading);
  if (!loading && initProduct) {
    console.log(initProduct);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "2em  2em",
        }}
      >
        <div>
          <h1>Edit Product</h1>
          <div className="card">
            <div style={{ width: "70%" }} className="card-body">
              {initProduct.image && (
                <img
                  src={initProduct.image}
                  alt="profile"
                  className="img-thumbnail"
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                />
              )}
              <div>
                <strong>{initProduct.title}</strong>
                <br />
                {initProduct.category && <small>{initProduct.category}</small>}
              </div>

              {initProduct.price && (
                <p>
                  <p>{`Price : ${initProduct.price} DZD`} </p>
                </p>
              )}
              {initProduct.description && (
                <div
                  style={{ width: "inherit", height: "100%", color: "#555" }}
                >
                  {initProduct.description.substring(0, 25) + "..."}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(FindEditProduct({ id, data: initProduct, toast }));
            }}
          >
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={initProduct.title}
                onChange={(e) =>
                  setInitProduct({ ...initProduct, title: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                min={0}
                className="form-control"
                value={initProduct.price}
                onChange={(e) =>
                  setInitProduct({ ...initProduct, price: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                id="description"
                onChange={(e) =>
                  setInitProduct({
                    ...initProduct,
                    description: e.target.value,
                  })
                }
                cols="30"
                rows="10"
              >
                {initProduct.description}
              </textarea>
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                min={0}
                className="form-control"
                value={initProduct.quantity}
                onChange={(e) =>
                  setInitProduct({
                    ...initProduct,
                    quantity: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                onChange={(e) =>
                  setInitProduct({ ...initProduct, category: e.target.value })
                }
                className="form-control"
              >
                <option selected>{initProduct.category}</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home</option>
                <option>Sports</option>
                <option>Books</option>
                <option>Others</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default EditProduct;
