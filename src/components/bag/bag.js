import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { getWilayaList } from "@dzcode-io/leblad";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeFromBag } from "../../redux/features/cartSlice";
import { addOrder } from "../../redux/features/orderSlice";
import empty from "./svgs/empty_cart.svg";
import "./bag.css";

function Bag(props) {
  const allWilayasDetails = getWilayaList();
  let user = localStorage.getItem("profile");
  let userData = JSON.parse(user);
  console.log(userData);
  let cart = localStorage.getItem("cart");
  let items = JSON.parse(cart);
  const ids = items.map((item) => item._id);
  let filtred = items.filter(({ _id }, index) => !ids.includes(_id, index + 1));
  let [final, setFinal] = useState(filtred);

  const [order, setOrder] = useState({
    name: userData.firstName + " " + userData.lastName,
    phone: userData.phone || "+213",
    address: "",
    wilaya: "Not selected",
    payment: "Cash on Delivery",
    email: userData.email,
    note: "",
    products: filtred,
    total: final.reduce((acc, item) => acc + item.price * item.quantity, 0),
  });

  console.log(order);
  console.log(final);
  console.log(filtred);

  const dispatch = useDispatch();
  if (filtred && filtred.length > 0) {
    return (
      <div
        className="bag"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div>
          {" "}
          <table className="table table-borderless ">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th>TOTAL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {final.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".4em",
                      }}
                    >
                      <img
                        style={{ maxWidth: "90px" }}
                        src={item.image}
                        alt=""
                      />
                      <small>{item.title}</small>
                    </div>
                  </td>

                  <td>{`${item.price} DZD`}</td>

                  <td>
                    <input
                      style={{
                        width: "50px",
                      }}
                      type="number"
                      min={1}
                      defaultValue={1}
                      onChange={(e) => {
                        let newFinal = [...final];
                        newFinal[final.indexOf(item)].quantity = e.target.value;
                        setFinal(newFinal);
                        console.log(newFinal);
                      }}
                    />
                  </td>
                  <td>{`${item.price * item.quantity} DZD`}</td>
                  <td>
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                      onClick={() => {
                        let newFinal = [...final];
                        newFinal.splice(final.indexOf(item), 1);
                        setFinal(newFinal);
                        dispatch(removeFromBag({ productId: item._id, toast }));
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
        <div style={{ marginTop: "2em" }}>
          <h3>
            Total :{" "}
            {final.reduce((acc, item) => acc + item.price * item.quantity, 0)}{" "}
            DZD
          </h3>
          <div>
            <form action="">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.firstName + " " + userData.lastName}
                  onChange={(e) => {
                    let newOrder = { ...order };
                    newOrder.name = e.target.value;
                    setOrder(newOrder);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.email}
                  onChange={(e) => {
                    let newOrder = { ...order };
                    newOrder.email = e.target.value;
                    setOrder(newOrder);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <PhoneInput
                  country={"DZ"}
                  placeholder="Enter phone number"
                  value={userData.phone}
                  onChange={(e) => {
                    setOrder({ ...order, phone: e });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={userData.address}
                  onChange={(e) => {
                    let newOrder = { ...order };
                    newOrder.address = e.target.value;
                    setOrder(newOrder);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Wilaya</label>
                <select
                  className="form-control"
                  onChange={(e) => {
                    let newOrder = { ...order };
                    newOrder.wilaya = e.target.value;
                    setOrder(newOrder);
                  }}
                >
                  {allWilayasDetails.map((wilaya) => (
                    <option key={wilaya.id} value={wilaya.id}>
                      {wilaya.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Payment Method</label>
                <select className="form-control" onChange={(e) => {}}>
                  <option value="cash">Cash on delivery</option>
                  <option value="visa">Credit/Debit Card</option>
                </select>
              </div>
              <div className="form-group">
                <label>Add a note</label>
                <textarea
                  onChange={(e) => {
                    let newOrder = { ...order };
                    newOrder.note = e.target.value;
                    setOrder(newOrder);
                  }}
                  className="form-control"
                  rows="3"
                >
                  {order.note}
                </textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  let newOrder = { ...order };
                  newOrder.products = [
                    ...final.map((item) => {
                      return {
                        product: item._id,
                        quantity: item.quantity,
                      };
                    }),
                  ];
                  setOrder(newOrder);
                  dispatch(addOrder({ newOrder, toast }));
                }}
              >
                Confirm Order
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bag">
        <h1>Your Bag is empty...</h1>
        <img
          style={{
            width: "100%",
            height: "100vh",
            marginBottom: "2em",
          }}
          src={empty}
          alt="cart"
        />
      </div>
    );
  }
}

export default Bag;
