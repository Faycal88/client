import { Link } from "react-router-dom";

function Pagination({ productPerPage, totalProducts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }
  const handlePageChange = (e) => {
    paginate(e.target.value);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a className="page-link" href="#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Pagination;
