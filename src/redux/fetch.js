import { getProducts } from "./features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export function useFetch(func) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    let res = dispatch(func);
    res
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.status);
      })
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    error,
    loading,
  };
}
