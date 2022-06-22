import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../redux/features/articleSlice";
import Pagination from "./pagination";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import Loading from "../components/Loading/Loading";

function createData(name, calories, fat, carbs, protein, createur, content) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    createur,
    content,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              {row.content}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function ArticleTable() {
  const dispatch = useDispatch();
  const { article, loading } = useSelector((state) => ({ ...state.article }));
  const [initArticle, setInitArticle] = useState(article);
  const error = useSelector((state) => state.article.error);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlePerPage, setArticlePerPage] = useState(2);
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

    const rows = currentArticle.map((article) =>
      createData(
        article.title,
        <div>
          <img
            style={{
              width: "150px",
            }}
            src={article.mainImage}
            alt="article_img"
          />
        </div>,
        moment(article.createdAt).format("DD/MM/YYYY"),
        article.type,
        <div>
          <Link to={`/article/${article.slug}`}>
            <button
              style={{
                padding: ".5em",
              }}
              variant="contained"
              color="primary"
            >
              Lire
            </button>
          </Link>
          <Link to={`/admin/article/${article._id}`}>
            <button
              style={{
                marginLeft: "5px",
                padding: ".5em",
              }}
              variant="contained"
              color="secondary"
            >
              Modifier
            </button>
          </Link>
        </div>,
        article.creator.lastName,
        <div>
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
      )
    );
    return (
      <div
        style={{
          margin: "0em 2em 0em 2em",
        }}
      >
        <h1>Tableau Des Articles</h1>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Titre</TableCell>
                <TableCell align="center">Cover</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Action</TableCell>
                <TableCell align="center">Publier par</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          productPerPage={articlePerPage}
          totalProducts={article.length}
          paginate={(pageNumber) => setCurrentPage(pageNumber)}
        />
        <div>
          <Link to="/admin/articles/new">
            <button>Ajouter un article</button>
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
