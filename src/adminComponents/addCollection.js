import FileBase64 from "react-file-base64";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productSlice";
import { toast } from "react-toastify";
import CustomizedHook from "./CustomizedHook";
import "./styles/addCollection.css";
import {
  deleteCollection,
  getCollections,
} from "../redux/features/collectionSlice";

function AddCollection() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.product);
  const { collections } = useSelector((state) => state.collection);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCollections());
  }, [dispatch]);

  if (!loading && products) {
    return (
      <div
        style={{
          display: "flex",
          gap: "2em",
          margin: "4em 2em 0em 2em",
        }}
      >
        <div>
          <h1>Add Collection</h1>

          <div>
            <CustomizedHook items={products} />
          </div>
        </div>
        <div>
          <div className="foorm-control">
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-bordered table-striped mb-0">
                <thead>
                  <tr>
                    <th>Available Collections</th>
                    <th>Products in collection</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {collections &&
                    collections.map((collection) => (
                      <tr key={collection.id}>
                        <td>{collection.name}</td>
                        <td>
                          {collection.products.map((product) => (
                            <div key={product.id}>{product.title}</div>
                          ))}
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              const Id = collections._id;
                              dispatch(deleteCollection({ Id, toast }));
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>;
}

export default AddCollection;
