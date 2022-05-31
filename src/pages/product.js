import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../redux/features/productSlice";
import { cart } from "../redux/features/cartSlice";
import { getArticleProduct } from "../redux/features/articleSlice";
import moment from "moment";
import "./styles/card.css";

function ProductPage() {
  const [error, setError] = useState(null);
  const product = useSelector((state) => state.product.product);
  const { article, loading } = useSelector(
    (state) => ({ ...state.article.article } || {})
  );

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let res = dispatch(getProduct(id));
    let res2 = dispatch(getArticleProduct(id));
  }, []);

  if (!loading && product) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "4em  2em",
          }}
        >
          <div>
            <div className="card">
              <div
                style={{ width: "90%", display: "flex" }}
                className="card-body"
              >
                {product.image && (
                  <img
                    src={product.image}
                    alt="profile"
                    className="img-thumbnail easyzoom easyzoom--overlay"
                    style={{
                      width: "750px",
                      height: "750px",
                    }}
                  />
                )}
                <div
                  style={{
                    marginLeft: "2em",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5em",
                    }}
                  >
                    <strong>{product.title}</strong>
                    <br />
                    {product.category && <small>{product.category}</small>}
                  </div>
                  <br />
                  {product.description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: product.description,
                      }}
                    />
                  )}
                  <div>
                    <br />
                    {product.price && <p>{`Price : ${product.price} DZD`}</p>}
                    <button
                      onClick={() => {
                        const productId = product._id;
                        const user = localStorage.getItem("profile");
                        if (user) {
                          toast.success("Product added to cart");
                          return dispatch(cart({ productId, toast }));
                        } else {
                          return toast.error(
                            "You must be logged in to add to cart"
                          );
                        }
                      }}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        padding: "10px",
                        borderRadius: "5px",
                        cursor: "pointer",

                        marginLeft: "10px",
                        width: "100%",
                        height: "40px",
                        fontSize: "1em",

                        outline: "none",
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              margin: "4em  2em",
            }}
          >
            {article && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2em",
                }}
              >
                <div>
                  <p>{article.title && <strong>{article.title}</strong>}</p>
                  <small
                    style={{
                      color: "#555",
                    }}
                  >
                    {article.createdAt &&
                      moment(article.createdAt).format("DD/MM/YYYY")}
                  </small>
                </div>
                {article.description && article.description}
                {article.mainImage && (
                  <img
                    src={article.mainImage}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                )}
                <div>
                  <h2>{article.titleOne}</h2>
                  <p>{article.contentOne}</p>
                </div>
                <div>
                  {article.slug && (
                    <button
                      onClick={() => navigate(`/article/${article.slug}`)}
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid #555",
                        padding: "10px",
                      }}
                    >
                      {" "}
                      Read More
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default ProductPage;
