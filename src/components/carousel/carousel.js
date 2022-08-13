import "./carousel.css";
import { useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";
import { useFetch } from "../../redux/fetch";
import { Link } from "react-router-dom";

function ProductCarousel(props) {
  const { data, error } = useFetch(getProducts());
  const { products, loading } = useSelector((state) => state.product);

  return (
    products && (
      <div
        className="carousel"
        style={{
          margin: "0em  2em",
          gap: "1em",
          width: "140%",
        }}
      >
        <div
          className="carousel-items"
          id={props.items}
          style={{
            alignItems: "stretch",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: "auto",
            overflowY: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <div>
            {" "}
            <button
              style={{
                height: "1em",
                top: "50%",
                button: "50%",
              }}
              onClick={() => {
                const scroll = document.getElementById(props.items);
                scroll.scrollLeft -= 200;
              }}
              className="carousel-control-prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only"></span>
            </button>{" "}
          </div>
          {products
            .filter((product) => product.category === props.items)
            .map((product) => (
              <div
                className="carousel-item"
                key={product._id}
                style={{
                  margin: "1em",
                  border: "1px solid black",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "white",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                  maxWidth: "40%",
                  padding: ".75rem",
                  marginBottom: "2rem",
                  border: "0",
                  flexBasis: "33.333%",
                  flexGrow: "0",
                  flexShrink: "0",
                }}
              >
                <img
                  style={{
                    marginBottom: ".75rem",
                    width: "100%",
                  }}
                  className="card-img-top"
                  src={product.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>

                  <div className="d-flex justify-content-between flex-wrap">
                    <p className="card-text">
                      <small className="text-muted">{`${product.price} DZD`}</small>
                    </p>
                    <Link className="link" to={`/product/${product._id}`}>
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div>
          {" "}
          <button
            style={{
              height: "1em",
              top: "50%",
              button: "50%",
            }}
            onClick={() => {
              const scroll = document.getElementById(props.items);
              scroll.scrollLeft += 200;
            }}
            className="carousel-control-next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>{" "}
        </div>
      </div>
    )
  );
}

export default ProductCarousel;
