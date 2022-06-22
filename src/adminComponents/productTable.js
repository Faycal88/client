import "./styles/table.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Pagination from "./pagination";
import { useFetch } from "../redux/fetch";
import { getProducts, deleteProduct } from "../redux/features/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import Loading from "../components/Loading/Loading";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "_id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Titre", width: 250 },
  { field: "description", headerName: "Description", width: 130 },
  {
    field: "image",
    headerName: "Image",
    width: 100,
    height: "100%",
    editable: true,
    renderCell: (params) => (
      <img
        style={{
          width: "100px",
          objectFit: "contain",
        }}
        src={params.value}
      />
    ),
  },
  {
    field: "price",
    headerName: "Prix",
    type: "number",
    width: 90,
  },
  {
    field: "category",
    headerName: "Catégorie",
    sortable: true,
    width: 160,
  },
];

function TablePro() {
  const [selectedIDs, setSelectedIDs] = useState([]);
  const { loading, error } = useFetch(getProducts());
  const { products } = useSelector((state) => ({ ...state.product }));
  console.log(selectedIDs);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!loading) {
    const rows = products;
    return (
      <div>
        <h1>Produit en vente</h1>
        <div>
          <Box sx={{ height: 400, width: 1000, flexGrow: 1 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              getRowId={(row) => row._id}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRowData = rows.filter((row) =>
                  selectedIDs.has(row._id)
                );
                setSelectedIDs(selectedRowData);
              }}
            />
          </Box>
          <div>
            <Link to="/admin/produits/new">
              <button>Ajouter un nouveau produit</button>
            </Link>
            {selectedIDs.length > 0 ? (
              <button
                onClick={() => {
                  if (
                    prompt(
                      `Voulez vous suprimer ${selectedIDs.length} produits ? Valider par OUI`
                    ) === "OUI"
                  ) {
                    console.log("true");
                  } else {
                    console.log("false");
                  }
                }}
              >
                Delete Selected Data
              </button>
            ) : (
              <button disabled>Delete Selected Data</button>
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        marginTop: " 2em",
      }}
    >
      <Loading />
    </div>
  );
}

export default TablePro;

{
  /* <table
className="table table-hover table-bordered  "
style={{ width: "100%" }}
>
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Titre</th>
    <th scope="col">Prix</th>
    <th scope="col">Description</th>
    <th scope="col">Quantité</th>
    <th scope="col">Categorie</th>
    <th scope="col">Image</th>
    <th scope="col">Date</th>
    <th scope="col">Action</th>
  </tr>
</thead>
<tbody>
  {currentProducts.map((product) => (
    <tr key={product._id}>
      <th scope="row">{product._id}</th>
      <td>{product.title}</td>
      <td>{`${product.price} DZD`}</td>
      <td>{product.description.substring(0, 20) + "..."}</td>
      <td>{product.quantity}</td>
      <td>{product.category}</td>
      <td>
        <img
          style={{ maxWidth: "150px" }}
          src={product.image}
          alt="product"
        />
      </td>
      <td>{product.createdAt}</td>
      <td>
        <button
          onClick={() => {
            navigate(`/admin/Product/${product._id}`);
          }}
        >
          Modifier
        </button>
        <button
          onClick={() => {
            dispatch(deleteProduct(product._id));
          }}
        >
          Retirer
        </button>
      </td>
    </tr>
  ))}
</tbody>
</table> */
}
