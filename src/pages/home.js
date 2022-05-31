import "./styles/home.css";
import landingImg from "../imgs/cover_land.jpg";
import blackLogo from "../imgs/black_logo.svg";
import cacti from "../imgs/cacti.jpg";
import Typewriter from "typewriter-effect";
import { randQuote } from "../components/typescript/array";
import WhyUs from "../components/whyUs/whyUs";
import Article from "../components/article/article";
import { Link } from "react-router-dom";
import { useState } from "react";
import Carousel from "../components/carousel/carousel";
import { getProducts } from "../redux/features/productSlice";
import { useFetch } from "../redux/fetch";
import { useSelector } from "react-redux";
import VisitStore from "../components/visitStore/visitStore";
import ShowCollection from "../components/collections/collection";

function Landing() {
  return (
    <div>
      <section className="sec_one">
        <div className="top_landing col-md-11 flex-lg-row">
          <div
            style={{
              margin: "3em 3em",
              maxWidth: "90%",
            }}
            className="topLeft col-md-4 "
          >
            <div className="topLeftText">
              <img
                className="logo"
                style={{ maxWidth: "200px" }}
                src={blackLogo}
                alt="logo"
              />
              <h1>Welcome</h1>
              <h2>to the world of plants</h2>
            </div>
            <div>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(randQuote).start();
                }}
              />
            </div>
          </div>
          <div className="col-md-8">
            <img
              style={{
                maxWidth: "100%",
              }}
              src={landingImg}
              alt=""
            />
          </div>
        </div>
      </section>

      {/*  <section
          style={{
            backgroundImage: `url(${mainImg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#E6E7E9",
            height: "100vh",
          }}
          className="topSecrion"
        >
          <div style={{ marginTop: "1em" }} className="topLeft">
            <div className="topLeftText">
              <img style={{ maxWidth: "200px" }} src={blackLogo} alt="logo" />
              <h1>Welcome</h1>
              <h2>to the world of plants</h2>
            </div>
            <div>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString(randQuote).start();
                }}
              />
            </div>
          </div>
          <div style={{ marginTop: "5em" }} className="topRight">
            <div style={{ position: "relative" }} className="circle">
              <h4 style={{ position: "absolute", top: "50px" }}>
                One of the Most <br /> Popular Houseplants
              </h4>
              <img
                style={{ maxWidth: "400px", zIndex: "100" }}
                src={sideImg}
                alt=""
              />
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  right: "50px",
                  bottom: "10px",
                }}
              >
                <button
                  className="btn btn-dark "
                  style={{ marginRight: "10px" }}
                >
                  Buy
                </button>
                <button className="btn btn-warning">Learn More</button>
              </div>
            </div>
          </div>
        </section> */}
      <section>
        <ShowCollection />
      </section>
      <section
        style={{
          marginTop: "2em",
        }}
      >
        <div className="carousel">
          <div>
            <Link className="shop_link" to="/shop?browse=indoor">
              <span>{`Shop our best selling plants >`}</span>
            </Link>
          </div>
          <Carousel items={"indoor"} />
        </div>
        <div className="carousel">
          <div>
            <Link className="shop_link" to="/shop?browse=flower">
              <span>{`Shop beautiful flowers >`}</span>
            </Link>
          </div>
          <Carousel items={"flower"} />
        </div>
      </section>
      <section style={{ margin: "3% 5%" }}>
        <WhyUs />
      </section>
      <section
        style={{
          margin: "3% 5%",
          textAlign: "center",
          backgroundColor: "#E6E7E9",
        }}
      >
        <Article />
      </section>
      <section className="sec_visit_store">
        <VisitStore />
      </section>
    </div>
  );
}

export default Landing;
