import "./styles/shop.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productSlice";
import { useEffect, useState } from "react";
import Card from "../components/shopingCard/card";
import { useParams, useSearchParams } from "react-router-dom";
import {
  getCollections,
  getProductsbyCollection,
} from "../redux/features/collectionSlice";

function Shop() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => ({ ...state.product }));
  const { collections } = useSelector((state) => ({ ...state.collection }));
  console.log(collections);
  let [searchParams, setSearchParams] = useSearchParams({});

  const [filter, setFilter] = useState("");
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCollections());
    const category = searchParams.get("browse");
    const collectionName = searchParams.get("collection");
    if (category != null && category !== "") {
      setFilter(products.filter((product) => product.category === category));
    } else if (
      collectionName != null &&
      collectionName != undefined &&
      collectionName !== ""
    ) {
      const { products } = collections.find(
        (collection) => collection.name === collectionName
      );
      console.log(products);
      setFilter(products);
    } else {
      setFilter(products);
    }
  }, []);

  /* useEffect(() => {
    if (collections && category == null) {
      console.log("collections");
    } else if (category != undefined) {
      console.log(category);
      return setFilter(
        products.filter((product) => product.category === category)
      );
    } else {
      setFilter(products);
    }
  }, [dispatch, products, category, collections]); */

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

  searchParams && searchParams.search && search();

  return (
    <div
      style={{ margin: "4em 0em 0em 2em", padding: "0" }}
      className="col-md-11"
    >
      <h1>Shop</h1>
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "2em" }} className="sidebar-body">
            <h3>Categories</h3>
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
                  onClick={() => setFilter(products)}
                  style={{ border: "none", background: "transparent" }}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilter(
                      products.filter(
                        (product) => product.category === "indoor"
                      )
                    )
                  }
                  style={{ border: "none", background: "transparent" }}
                >
                  Indoor Plants
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilter(
                      products.filter(
                        (product) => product.category === "outdoor"
                      )
                    )
                  }
                  style={{ border: "none", background: "transparent" }}
                >
                  Outdoor Plants
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setFilter(
                      products.filter(
                        (product) => product.category === "decorative"
                      )
                    )
                  }
                  style={{ border: "none", background: "transparent" }}
                >
                  Decorative Plants
                </button>
              </li>
            </ul>
          </div>
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
