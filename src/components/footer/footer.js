import logo from "../../imgs/black_logo.svg";
import "./footer.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { addSubsriber } from "../../redux/features/newsletterSlice";

function CustomFooter() {
  const [email, setEmail] = useState({
    email: "",
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "2em 2em",
          backgroundColor: "#f5f5f5",
        }}
        className="footer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1em",
          }}
        >
          <img width={"100px"} src={logo} alt="" />
          <span>SARL L'éternelle Des Plantes</span>
          <p
            style={{
              margin: "0",
            }}
          >
            2021 - 2022 © Copyright
          </p>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "block",
              width: ".1em",
              height: "100%",
              backgroundColor: "black",
              marginRight: "2em",
            }}
          ></div>
          <div>
            <h5>MENU</h5>
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
                <a
                  className="nav-link"
                  style={{
                    padding: "0",
                    color: "#555",
                  }}
                  href="/"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  style={{
                    padding: "0",
                    color: "#555",
                  }}
                  href="/shop"
                >
                  Boutique
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  style={{
                    padding: "0",
                    color: "#555",
                  }}
                  href="/contact"
                >
                  Contactez-nous
                </a>
              </li>
              <li>
                <a
                  className="nav-link"
                  style={{
                    padding: "0",
                    color: "#555",
                  }}
                  href="/stores"
                >
                  Trouver un magasin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "block",
              width: ".1em",
              height: "100%",
              backgroundColor: "black",
              marginRight: "2em",
            }}
          ></div>
          <div>
            <h5>SUIVEZ-NOUS</h5>
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
                <a
                  style={{
                    padding: "0",
                    color: "#555",
                  }}
                  className="nav-link"
                  href="https://www.facebook.com/eternelle.plantes"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  style={{
                    padding: "0",
                    color: "#555",
                  }}
                  className="nav-link"
                  href="https://www.instagram.com/eternelle.plantes"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              display: "block",
              width: ".1em",
              height: "100%",
              backgroundColor: "black",
              marginRight: "2em",
            }}
          ></div>
          <div
            style={{
              padding: "0",
              display: "flex",
              flexDirection: "column",
              gap: ".8em",
            }}
          >
            <h5>ABONNEZ-VOUS</h5>
            <div>
              <p
                style={{
                  margin: "0",
                }}
              >
                <small>S'abonner</small>
              </p>
              <div
                style={{
                  position: "relative",
                }}
              >
                <input
                  type="email"
                  value={email.email}
                  onChange={(e) => setEmail({ email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "1em 3em 1em 1em",
                    borderRadius: "5px",
                    backgroundColor: "#f5f5f5",
                    fontSize: ".8em",
                    fontWeight: "bold",
                    color: "#555",
                    marginBottom: "1em",
                  }}
                  placeholder="Entrer votre Email"
                />
                <div
                  style={{
                    position: "absolute",
                    right: ".4em",
                    top: ".8em",
                    zIndex: "1",
                  }}
                >
                  <button
                    style={{
                      margin: "0",
                      padding: "0",
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    onClick={() => {
                      if (email.email !== "") {
                        dispatch(addSubsriber({ email, toast }));
                      } else {
                        toast.error("Please enter a valid email");
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomFooter;
