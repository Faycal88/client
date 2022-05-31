import { Link } from "react-router-dom";
import Pagination from "../../adminComponents/pagination";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cart } from "../../redux/features/cartSlice";
import { toast } from "react-toastify";

function Card(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(12);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  const currentProducts = props.items.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      style={{
        margin: "2em  0em",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "1em",
          flexWrap: "wrap",
        }}
      >
        {currentProducts.map((item) => (
          <div key={item._id}>
            <div
              style={{ maxWidth: "14em", backgroundColor: "#E6E7E9" }}
              className="card"
            >
              <div className="card-image">
                <div
                  style={{
                    width: "100%",
                    position: "absolute",
                    left: "0%",
                    buttom: "0%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "white",
                    textAlign: "center",
                    padding: "1em 1em",
                    zIndex: "1",
                    display: "none",
                  }}
                  className="card-title"
                >
                  {" "}
                  <strong>{item.title}</strong>{" "}
                </div>
                <Link to={`/product/${item._id}`}>
                  <img
                    style={{
                      width: "100%",
                      position: "relative",
                      top: "0",
                      left: "0",
                    }}
                    src={item.image}
                    alt="product_img"
                  />
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginTop: "1em",
                }}
              >
                <p style={{ margin: "0" }}>
                  Price : <strong>{item.price}</strong>{" "}
                </p>
                <button
                  style={{
                    margin: "0",
                    padding: "0",
                    border: "none",
                    backgroundColor: "transparent",
                  }}
                  onClick={() => {
                    const user = localStorage.getItem("profile");
                    if (user) {
                      toast.success("Product added to cart");
                      dispatch(cart({ productId: item._id, toast }));
                    } else {
                      return toast.error(
                        "You must be logged in to add to cart"
                      );
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.5 22h-9.5v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v5.181c.482-.114.982-.181 1.5-.181l.5.025v-7.025h-5v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h12.816c-.553-.576-1.004-1.251-1.316-2zm-5.5-18c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm11.5 11c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z" />
                  </svg>
                </button>
              </div>
              <div className="card-content">
                <p style={{ padding: "1em .5em 0em .5em" }}>
                  {item.description.substring(0, 60)}
                  {"... "}
                  <Link to={`/product/${item._id}`}>read more</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "1em",
        }}
      >
        <Pagination
          productPerPage={productPerPage}
          totalProducts={props.items.length}
          paginate={(pageNumber) => setCurrentPage(pageNumber)}
        />
      </div>
    </div>
  );
}

export default Card;
