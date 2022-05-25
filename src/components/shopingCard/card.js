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
                  onClick={() => {
                    dispatch(cart({ productId: item._id, toast }));
                  }}
                >
                  Add To Card
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
