import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardCollection from "./cardCollection";
import { getCollections } from "../../redux/features/collectionSlice";
import Loading from "../Loading/Loading";

function ShowCollection() {
  const dispatch = useDispatch();
  const { collections, loading } = useSelector((state) => state.collection);

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  if (!loading && collections) {
    return (
      <div
        style={{
          margin: "2em 4em 0em 4em",
        }}
      >
        <h2>Featured Collections</h2>
        <div className="row">
          <div className="col-md-12">
            <CardCollection items={collections} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        margin: "2em 4em 0em 4em",
        textAlign: "center",
      }}
    >
      <Loading />
    </div>
  );
}

export default ShowCollection;
