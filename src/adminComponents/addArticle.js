import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../redux/features/productSlice";
import { useFetch } from "../redux/fetch";
import FileBase64 from "react-file-base64";
import { toast } from "react-toastify";
import { addArticle } from "../redux/features/articleSlice";
import moment from "moment";

function AddArticle() {
  const [article, setArticle] = useState({
    title: "",
    description: "",
    image: "",
    titleOne: "",
    contentOne: "",
    imageOne: "",
    titleTwo: "",
    contentTwo: "",
    imageTwo: "",
    titleThree: "",
    contentThree: "",
    imageThree: "",
    productRef: "",
    tag: "",
    type: "",
  });

  console.log(article);

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log(user);

  useFetch(getProducts());

  const { products, loading } = useSelector((state) => state.product);

  console.log(products);

  return (
    <div
      style={{
        margin: "4em 2em 0em 2em",
      }}
    >
      <div class="form-group">
        <label for="title">Title</label>
        <input
          required
          value={article.title}
          type="text"
          name="title"
          id="title"
          class="form-control"
          onChange={(e) => {
            let newArticle = { ...article };
            newArticle.title = e.target.value;
            setArticle(newArticle);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Cover Image</label>
        <br />
        <FileBase64
          multiple={false}
          onDone={(file) => {
            var base = file.base64;

            setArticle({ ...article, image: base });
          }}
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          required
          name="description"
          id="description"
          cols="30"
          rows="5"
          class="form-control"
          onChange={(e) => {
            let newArticle = { ...article };
            newArticle.description = e.target.value;
            setArticle(newArticle);
          }}
        ></textarea>
      </div>
      <div class="form-group">
        <label for="markdown1">Markdown 1</label>
        <input
          required
          value={article.titleOne}
          type="text"
          placeholder="Title"
          name="titleOne"
          id="titleOne"
          class="form-control"
          onChange={(e) => {
            let newArticle = { ...article };
            newArticle.titleOne = e.target.value;
            setArticle(newArticle);
          }}
        />
        <br />
        <FileBase64
          multiple={false}
          onDone={(file) => {
            var base = file.base64;

            setArticle({ ...article, imageOne: base });
          }}
        />
        <textarea
          required
          name="markdown1"
          id="markdown1"
          cols="30"
          rows="5"
          class="form-control"
          onChange={(e) => {
            let newArticle = { ...article };
            newArticle.contentOne = e.target.value;
            setArticle(newArticle);
          }}
        ></textarea>
      </div>
      <div class="form-group">
        <label for="markdown2">Markdown 2</label>
        <input
          required
          value={article.titleTwo}
          type="text"
          placeholder="Title"
          name="titleTwo"
          id="titleTwo"
          class="form-control"
          onChange={(e) => {
            let newArticle = { ...article };
            newArticle.titleTwo = e.target.value;
            setArticle(newArticle);
          }}
        />
        <br />
        <FileBase64
          multiple={false}
          onDone={(file) => {
            var base = file.base64;

            setArticle({ ...article, imageTwo: base });
          }}
        />
        <textarea
          required
          name="markdown2"
          id="markdown2"
          cols="30"
          rows="5"
          class="form-control"
          onChange={(e) => {
            let newArticle = { ...article };
            newArticle.contentTwo = e.target.value;
            setArticle(newArticle);
          }}
        ></textarea>
      </div>
      <div class="form-group">
        <label for="markdown3">Markdown 3</label>
        <input
          required
          value={article.titleThree}
          type="text"
          placeholder="Title"
          name="titleThree"
          id="titleThree"
          class="form-control"
          onChange={(e) => {
            let newArticle = { ...article };
            newArticle.titleThree = e.target.value;
            setArticle(newArticle);
          }}
        />
        <br />
        <FileBase64
          multiple={false}
          onDone={(file) => {
            var base = file.base64;

            setArticle({ ...article, imageThree: base });
          }}
        />
        <textarea
          required
          name="markdown3"
          id="markdown3"
          cols="30"
          rows="5"
          class="form-control"
          onChange={(e) => {
            let newArticle = { ...article };
            newArticle.contentThree = e.target.value;
            setArticle(newArticle);
          }}
        ></textarea>
      </div>
      <div class="form-group">
        <label htmlFor="Type">Type</label>
        <select
          className="form-control"
          id="type"
          value={article.type}
          onChange={(e) => {
            let newArticle = { ...article };
            newArticle.type = e.target.value;
            setArticle(newArticle);
          }}
        >
          <option value="">Select type</option>
          <option value="article">Article</option>
          <option value="Plant Care Guide">Plant Care Guide</option>
          <option value="news">News</option>
        </select>
      </div>
      {article.type === "Plant Care Guide" ? (
        <div className="form-group">
          <label htmlFor="productRef">Product Ref</label>
          <select
            className="form-control"
            id="productRef"
            value={article.productRef}
            onChange={(e) => {
              let newArticle = { ...article };
              newArticle.productRef = e.target.value;
              setArticle(newArticle);
            }}
          >
            <option value="">Select product</option>
            {products.map((product) => (
              <option key={product._id} value={product._id}>
                {product.title}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <a href="/" class="btn btn-secondary">
        Cancel
      </a>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (
            article.title &&
            article.description &&
            article.type &&
            article.image &&
            article.contentOne &&
            article.titleOne &&
            article.imageOne
          ) {
            dispatch(addArticle({ article, toast }));
          } else {
            toast.error("Please fill all fields");
          }
        }}
        type="submit"
        class="btn btn-primary"
      >
        Save
      </button>

      <div
        style={{
          margin: "2em 0em 0em 0em",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "fit-content",
          }}
          className="container"
        >
          <div className="row">
            <div className="col-md-12">
              <div>
                <div>
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={article.image}
                    alt="article_img"
                  />
                  <p
                    style={{
                      fontSize: "1.5em",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  ></p>
                </div>
                <div
                  style={{
                    padding: "1em 14em 1em 14em",
                    textAlign: "center",
                    color: "black",
                    backgroundColor: "white",
                    marginTop: "1em",
                    width: "100%",
                  }}
                >
                  <h1 className="card-title">{article.title}</h1>
                  <small>{moment(Date.now).format("DD/MM/YYYY")}</small>
                  <p className="card-text">{article.description}</p>
                  <h2>{article.titleOne}</h2>
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={article.imageOne}
                    alt=""
                  />
                  <p className="card-text">{article.contentOne}</p>
                  <h2>{article.titleTwo}</h2>
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={article.imageTwo}
                    alt=""
                  />

                  <p className="card-text">{article.contentTwo}</p>
                  <h2>{article.titleThree}</h2>
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={article.imageThree}
                    alt=""
                  />

                  <p className="card-text">{article.contentThree}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddArticle;
