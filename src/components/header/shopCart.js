import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ShopCart(props) {
  const navigate = useNavigate();

  const cart = JSON.parse(props.items);

  const ids = cart.map((item) => item._id);
  let filtred = cart.filter(({ _id }, index) => !ids.includes(_id, index + 1));
  if (filtred) {
    return (
      <div>
        <div
          style={{
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => navigate("/bag")}
        >
          <svg
            width="28"
            height="28"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z" />
          </svg>
          {filtred.length > 0 && (
            <div
              style={{
                display: "block",
                position: "absolute",
                width: "50%",
                height: "50%",
                top: "0",
                left: "14px",
                fontSize: ".7em",
                backgroundColor: "red",
                borderRadius: "50%",
                textAlign: "center",
              }}
            >
              {filtred.length}
              <div
                className="cart"
                style={{
                  display: "none",
                  position: "absolute",
                  width: "20em",
                  height: "20em",
                  top: "100%",
                  right: "-800%",
                  fontSize: ".7em",
                  textAlign: "center",
                  border: "1px solid black",
                  padding: ".3em .3em",
                }}
              >
                {filtred && null}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ShopCart;
