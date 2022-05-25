import React from "react";
import fourOfour from "./svgs/404.svg";
import "./notFound.css";

function NotFound() {
  return (
    <div
      style={{
        margin: "4em 10em 0em 10em",
      }}
    >
      <h1>We Are Sorry</h1>
      <div className="d-flex">
        <h2>The Page you are loking for does not exist </h2>
        <button
          className="home"
          style={{
            background: "none",
            border: "none",
          }}
          onClick={() => (window.location.href = "/")}
        >
          Go back home ...
        </button>
      </div>
      <img
        style={{
          width: "100%",
          maxHeight: "500px",
        }}
        src={fourOfour}
        alt=""
      />
    </div>
  );
}

export default NotFound;
