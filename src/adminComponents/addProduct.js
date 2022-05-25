import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addProduct } from "../redux/features/productSlice";
import FileBase64 from "react-file-base64";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    quantity: "",
    category: "",
    image: "",
    createdAt: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "2em  2em",
      }}
    >
      <div>
        <h1>Add new product</h1>
        <div className="card">
          <div style={{ width: "70%" }} className="card-body">
            {product.image && (
              <img
                src={product.image}
                alt="profile"
                className="img-thumbnail"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            )}
            <div>
              <strong>{product.name}</strong>
              <br />
              {product.category && <small>{product.category}</small>}
            </div>

            {product.price && (
              <p>
                <p>{`Price : ${product.price} DZD`} </p>
              </p>
            )}
            {product.description && (
              <div style={{ width: "inherit", height: "100%", color: "#555" }}>
                {product.description.substring(0, 25) + "..."}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setError(null);
            setSuccess(null);
            const formData = {
              name: product.name,
              price: product.price,
              description: product.description,
              quantity: product.quantity,
              category: product.category,
              image: product.image,
              createdAt: new Date(),
            };
            console.log(formData);
            if (
              product.name &&
              product.price &&
              product.description &&
              product.quantity &&
              product.category &&
              product.image
            ) {
              dispatch(addProduct({ formData, toast }));
              setLoading(false);
              navigate("/admin");
            } else {
              toast.error("Please fill in all the fields");
              setLoading(false);
            }
          }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              min={0}
              className="form-control"
              id="price"
              placeholder="Enter price"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              min={0}
              className="form-control"
              id="quantity"
              placeholder="Enter quantity"
              value={product.quantity}
              onChange={(e) =>
                setProduct({ ...product, quantity: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              id="category"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            >
              <option value="">Select category</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="Large">Large</option>
              <option value="decorative">Decorative</option>
              <option value="flower">Flower</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <FileBase64
              multiple={false}
              onDone={(file) => {
                var base = file.base64;
                setProduct({ ...product, image: base });
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Loading..." : "Add product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
