import "./styles/shop.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productSlice";
import { useEffect, useState } from "react";
import Card from "../components/shopingCard/card";
import { useSearchParams } from "react-router-dom";
import { getCollections } from "../redux/features/collectionSlice";
import { getCategories } from "../redux/features/categorySlice";
import Loading from "../components/Loading/Loading";

function Shop() {
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => ({ ...state.product }));
  const { collections } = useSelector((state) => ({ ...state.collection }));
  const { categories } = useSelector((state) => ({
    ...state.category.categories,
  }));
  console.log(categories);

  let [searchParams, setSearchParams] = useSearchParams({});

  const [filter, setFilter] = useState("");
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCollections());
    dispatch(getCategories());
    const category = searchParams.get("browse");
    const collectionName = searchParams.get("collection");
    console.log(collectionName);
    if (
      category != null &&
      category !== "" &&
      category !== undefined &&
      products
    ) {
      setFilter(products.filter((product) => product.category === category));
    } else if (
      collectionName != null &&
      collectionName != undefined &&
      collectionName !== "" &&
      collections
    ) {
      const { products } = collections.find((collection) =>
        collection.name.includes(collectionName)
      );
      console.log(products);
      setFilter(products);
    } else {
      setFilter(products);
    }
  }, []);

  function search(e) {
    e.preventDefault();
    setFilter(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.category.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.description.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }

  function valuetext(value) {
    return `${value} DZD`;
  }

  function handleChange(event, newValue) {}

  searchParams && searchParams.search && search();

  return (
    <div
      style={{ margin: "4em 0em 0em 2em", padding: "0" }}
      className="col-md-11"
    >
      <h1>Boutique</h1>
      <div className="shop" style={{ display: "flex" }}>
        <div style={{ marginTop: "2em" }} className="sidebar">
          <div className="sidebar-header col-md-12">
            <div style={{ display: "flex", position: "relative" }}>
              <input
                style={{
                  width: "100%",
                  padding: ".4em .4em",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  boxShadow: "0 1px 1px rgba(0, 0, 0, 0.075) inset",
                  transition:
                    "border-color ease-in-out .15s, box-shadow ease-in-out .15s",
                  borderColor: "#ccc",
                  maxWidth: "100%",
                  paddingInlineEnd: "35px",
                }}
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <div
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "5%",
                  top: "20%",
                }}
              >
                <svg
                  onClick={(e) => search(e)}
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "2em" }} className="sidebar-body">
            <h3>Catégories</h3>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                display: "flex",
                flexDirection: "column",
                gap: ".8em",
              }}
            >
              <li>
                <button
                  className="butomBorder"
                  onClick={() => setFilter(products)}
                  style={{ border: "none", background: "transparent" }}
                >
                  Tout les produits
                </button>
              </li>
              {categories &&
                categories.map((category) => (
                  <li>
                    <button
                      className="butomBorder"
                      onClick={() =>
                        setFilter(
                          products.filter(
                            (product) => product.category === category.name
                          )
                        )
                      }
                      style={{
                        border: "none",
                        background: "transparent",
                      }}
                      key={category._id}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div
            style={{
              width: "80%",
            }}
          ></div>
        </div>
        <div
          style={{ margin: "0em 1em 0em 1em", padding: "0" }}
          className="row col-md-10"
        >
          {filter ? (
            <div>{products && <Card items={filter} />} </div>
          ) : (
            <div>{products && <Card items={products} />} </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
