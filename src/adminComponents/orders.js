import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getOrders } from "../redux/features/orderSlice";
import moment from "moment";

function ShowOrders() {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.order);

  useEffect(() => {
    let res = dispatch(getOrders());
    console.log(res);
  }, []);

  if (order) {
    console.log(order);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>User ID</th>
                    <th>Products</th>
                    <th>SubTotal</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((order) => (
                    <tr key={order.id}>
                      <td>
                        <div>
                          <a href={`/admin/order/${order._id}`}>{order._id}</a>
                          <p
                            style={{
                              margin: "0",
                            }}
                          >
                            {order.name}
                          </p>
                          <p
                            style={{
                              margin: "0",
                            }}
                          >
                            {order.wilaya}
                          </p>
                          <p
                            style={{
                              margin: "0",
                            }}
                          >
                            adresse :{order.address}
                          </p>
                          <p
                            style={{
                              margin: "0",
                            }}
                          >
                            payment : {order.payment}
                          </p>
                          <p
                            style={{
                              margin: "0",
                            }}
                          >
                            phone : {order.phone}
                          </p>
                          <p
                            style={{
                              margin: "0",
                            }}
                          >
                            note : {order.note}
                          </p>
                        </div>
                      </td>
                      <td>
                        <div>
                          <p>
                            {" "}
                            {`${order.user.firstName} ${order.user.lastName}`}
                          </p>
                          {`(${order.user.email})`}
                          {`(${order.user.phone})`}
                        </div>
                      </td>
                      <td>
                        {order.products.map((product) => (
                          <div
                            key={product._id}
                          >{`${product.product.title}x${product.quantity}`}</div>
                        ))}
                      </td>
                      <td>
                        {order.products.map((product) => (
                          <div key={product._id}>
                            <div>
                              {`${product.product.price * product.quantity}
                              `}
                            </div>
                          </div>
                        ))}
                      </td>
                      <td>{order.total}</td>
                      <td>
                        {order.status === "pending" ? (
                          <span className="badge badge-warning">
                            {order.status}
                          </span>
                        ) : order.status === "delivered" ? (
                          <p className="badge badge-success">{order.status}</p>
                        ) : order.status === "cancelled" ? (
                          <p className="badge badge-danger">{order.status}</p>
                        ) : (
                          <p className="badge badge-info">{order.status}</p>
                        )}
                      </td>
                      <td>
                        {moment(order.createdAt).format("MMMM Do YYYY, h:mm a")}
                      </td>
                      <td>
                        <button className="btn btn-primary">View</button>
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
  } else {
    return <div>Loading...</div>;
  }
}

export default ShowOrders;
