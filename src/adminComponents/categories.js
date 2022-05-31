import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addCategory,
  deleteCategory,
  getCategories,
} from "../redux/features/categorySlice";
import { toast } from "react-toastify";

function Categories() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    ...state.category.categories,
  }));
  console.log(categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [category, setCategory] = useState("");
  console.log(category);

  return (
    <div
      style={{
        margin: "4em 2em 0em 2em",
      }}
    >
      <div>
        <div>
          <h2>Add a category</h2>
          <form>
            <div className="form-group col-4">
              <label htmlFor="exampleInputEmail1">Category Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter category name"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted">
                be sure to add a unique category name
              </small>
              <br />
              <button
                onClick={() => dispatch(addCategory({ category, toast }))}
                className="btn btn-success"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
      <h2>Categories</h2>

      <div className="table-wrapper-scroll-y my-custom-scrollbar col-2">
        <table className="table table-bordered table-striped mb-0">
          <thead>
            <tr>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category) => (
                <tr key={category._id}>
                  <td>{category.name}</td>
                  <td>
                    <button
                      onClick={() => {
                        const Id = category._id;
                        dispatch(deleteCategory({ Id, toast }));
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
  );
}

export default Categories;
