import Navigate from "../navigationMenu/navigate";
import Spacer from "../spacer/spacer";
import logo from "../../imgs/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/features/authSlice";
import { getCart } from "../../redux/features/cartSlice";
import profileImg from "../../imgs/profile.png";

import "./header.css";
import { useEffect } from "react";
import ShopCart from "./shopCart";

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { cart } = useSelector((state) => ({ ...state.cart }));

  useEffect(() => {
    dispatch(getCart());
  }, [user]);

  localStorage.setItem("cart", JSON.stringify(cart));

  const logout = () => {
    dispatch(setLogout());
  };

  var Nav = document.getElementById("nav");
  window.onscroll = function () {
    if (window.pageYOffset > 500) {
      Nav.classList.remove("bg-white");
      Nav.classList.add("bg-light");
    }
    if (window.pageYOffset < 500) {
      Nav.classList.remove("bg-light");
      Nav.classList.add("bg-white");
    }
  };

  return (
    <div>
      <nav
        id="nav"
        className="navbar navbar-expand-lg navbar-light bg-white   fixed-top"
      >
        <div className="container-fluid">
          <a
            style={{
              cursor: "pointer",
              userSelect: "none",
            }}
            className="navbar-brand"
            href="/"
          >
            L'éternelle Des Plantes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a id="shop" className="nav-link " href="/shop">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a id="contact" className="nav-link" href="#">
                  Contact
                </a>
              </li>

              {user?.token ? (
                <div
                  className="profiler"
                  style={{ display: "flex", marginLeft: "8em" }}
                >
                  {user?.role === "admin" ? (
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link admin-link" href="/admin">
                        Dashboard
                      </a>{" "}
                    </li>
                  ) : null}
                  <li className="nav-item">
                    <a className="nav-link" onClick={logout} href="/">
                      Logout
                    </a>
                  </li>
                  {user?.picture ? (
                    <li className="nav-item">
                      {" "}
                      <a href="/login">
                        <img
                          style={{ width: "40px", borderRadius: "50%" }}
                          src={user.picture}
                          alt="picture"
                        />{" "}
                      </a>{" "}
                    </li>
                  ) : (
                    <li className="nav-item">
                      {" "}
                      <a href="/login">
                        <img
                          style={{ width: "40px", borderRadius: "50%" }}
                          src={profileImg}
                          alt="picture"
                        />{" "}
                      </a>{" "}
                    </li>
                  )}
                </div>
              ) : (
                <div style={{ marginLeft: "8em" }}>
                  <li>
                    {" "}
                    <a href="/login">
                      <img
                        style={{ width: "40px", borderRadius: "50%" }}
                        src={profileImg}
                        alt="picture"
                      />{" "}
                    </a>{" "}
                  </li>
                </div>
              )}
            </ul>
            <div
              className="cart-container"
              style={{
                marginLeft: ".5em",
              }}
            >
              <ShopCart items={localStorage.getItem("cart")} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

{
  /* <div className="headbody">
      <div className="container">
        <div>
          <img style={{ width: "6em" }} src={logo} alt="logo" />
        </div>
        <div>
          {" "}
          <Navigate
            first="Home"
            second="Shop"
            third="About"
            fourth="Contact"
          />{" "}
        </div>
        <div className="profileBar">
          <ul>
            {user?.token ? (
              <div className="Profiler">
                {user?.role === "admin" ? (
                  <li>
                    {" "}
                    <a href="/admin">Dashboard</a>{" "}
                  </li>
                ) : null}
                <li>
                  <a onClick={logout} href="/">
                    Logout
                  </a>
                </li>
                {user?.picture ? (
                  <li>
                    {" "}
                    <a href="/login">
                      <img
                        className="profilepic"
                        src={user.picture}
                        alt="picture"
                      />{" "}
                    </a>{" "}
                  </li>
                ) : (
                  <li>
                    {" "}
                    <a href="/login">
                      <img
                        className="profilepic"
                        src={profileImg}
                        alt="picture"
                      />{" "}
                    </a>{" "}
                  </li>
                )}
              </div>
            ) : (
              <div className="Profile">
                <li>
                  {" "}
                  <a href="/login">
                    <img
                      className="profilepic"
                      src={profileImg}
                      alt="picture"
                    />{" "}
                  </a>{" "}
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
      <div>
        {" "}
        <Spacer />{" "}
      </div>
    </div> */
}
