import { getArticles } from "../../redux/features/articleSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./article.css";
import Loading from "../Loading/Loading";

function Article() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { article, loading, error } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  if (!loading && !error && article) {
    var item = article[Math.floor(Math.random() * article.length)];

    return (
      <div className="article">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "flex-start",
            justifyContent: "space-evenly",
            padding: "4em 0em",
          }}
          className="container"
        >
          <div
            className="contain"
            style={{
              maxWidth: "500px",
              margin: "5em 5em",
              position: "relative",
            }}
          >
            <img style={{ width: "500px" }} src={item.mainImage} alt="random" />
            <p style={{ position: "absolute", left: "2em", marginTop: "2em" }}>
              <strong>{item.title}</strong>
            </p>
          </div>
          <div
            style={{
              maxWidth: "450px",
            }}
          >
            <div style={{ top: "50%", button: "50%" }}>
              <h2>Plant Care Guide</h2>
              <p style={{ marginTop: "2em", textAlign: "flex-start" }}>
                {`${item.description.substring(0, 500)}...`}
              </p>
            </div>
            <button
              onClick={() => {
                navigate(`/article/${item.slug}`);
              }}
              style={{ padding: ".5em" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loading />
      </div>
    );
  }
}

export default Article;
