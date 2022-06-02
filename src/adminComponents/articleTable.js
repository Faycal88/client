import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../redux/features/articleSlice";
import Pagination from "./pagination";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import Loading from "../components/Loading/Loading";

function ArticleTable() {
  const dispatch = useDispatch();
  const { article, loading } = useSelector((state) => ({ ...state.article }));
  const [initArticle, setInitArticle] = useState(article);
  const error = useSelector((state) => state.article.error);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage, setArticlePerPage] = useState(4);
  const indexOfLastArticle = currentPage * articlePerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlePerPage;
  console.log(article, loading);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  useEffect(() => {
    let res = dispatch(getArticles());
  }, []);
  if (!loading && article) {
    console.log(article);
    const currentArticle = article.slice(
      indexOfFirstArticle,
      indexOfLastArticle
    );
    return (
      <div
        style={{
          margin: "4em 2em 0em 2em",
        }}
      >
        <h1>Articles Table</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Type</th>
              <th>Cover</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentArticle.map((article) => (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.description}</td>
                <td>{article.type}</td>
                <td>
                  <img
                    style={{
                      width: "400px",
                      height: "200px",
                    }}
                    src={article.mainImage}
                    alt="cover"
                  />
                </td>
                <td>{moment(article.createdAt).format("DD/MM/YYYY")}</td>
                <td>
                  <Link to={`/admin/article/${article._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          productPerPage={articlePerPage}
          totalProducts={article.length}
          paginate={(pageNumber) => setCurrentPage(pageNumber)}
        />
        <div>
          <Link to="/admin/article/new">
            <button>Add Article</button>
          </Link>
        </div>
        <Outlet />
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

export default ArticleTable;
