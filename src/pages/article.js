import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticleBySlug } from "../redux/features/articleSlice";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import moment from "moment";
import "./styles/article.css";
import Loading from "../components/Loading/Loading";

function Article() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [initArticle, setInitArticle] = useState();
  const article = useSelector((state) => state.article.article);
  const loading = useSelector((state) => state.article.loading);
  const error = useSelector((state) => state.article.error);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  useEffect(() => {
    let res = dispatch(getArticleBySlug(slug));
  }, []);

  if (!loading && article) {
    return (
      <div
        style={{
          margin: "4em 15em 0em 15em",
        }}
        className="article_contain"
      >
        <div className="article">
          <img
            style={{
              borderTopLeftRadius: "15%",
              borderBottomRightRadius: "15%",
              maxWidth: "100%",
            }}
            src={article.mainImage}
            alt=""
          />
          <div
            style={{
              marginTop: "2em",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.5em",
                fontWeight: "bold",
                margin: "0em 0em 0em 0em",
              }}
            >
              <strong>{article.title}</strong>
            </p>
            <br />
            <small>{moment(article.createdAt).format("DD/MM/YYYY")}</small>
          </div>
          <div
            style={{
              marginTop: "2em",
              fontSize: "1em",
              color: "#555",
            }}
          >
            {article.description}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "2em",
              gap: "1em",
            }}
          >
            <h3>{article.titleOne}</h3>
            <img
              style={{
                width: "100%",
                maxHeight: "500px",
                borderTopLeftRadius: "15%",
                borderBottomRightRadius: "15%",
              }}
              src={article.pictureOne}
              alt=""
            />
            <p>{article.contentOne}</p>
          </div>
          {article && article.titleTwo && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "2em",
                gap: "1em",
              }}
            >
              <h3>{article.titleTwo}</h3>
              <img
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  borderTopLeftRadius: "15%",
                  borderBottomRightRadius: "15%",
                }}
                src={article.pictureTwo}
                alt=""
              />
              <p>{article.contentTwo}</p>
            </div>
          )}

          {article && article.contentThree && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "2em",
                gap: "1em",
              }}
            >
              <h3>{article.titleThree}</h3>
              <img
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  borderTopLeftRadius: "15%",
                  borderBottomRightRadius: "15%",
                }}
                src={article.pictureThree}
                alt=""
              />
              <p>{article.contentThree}</p>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          marginTop: "4em",
        }}
      >
        <Loading />
      </div>
    );
  }
}

export default Article;
