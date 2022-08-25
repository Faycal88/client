import "./styles/home.css";
import landingImg from "../imgs/cover_land.jpg";
import landingTwo from "../imgs/landingTwo.jpg";
import landingThree from "../imgs/landingThree.jpg";
import landingFour from "../imgs/landingFour.jpg";
import blackLogo from "../imgs/black_logo.svg";
import cacti from "../imgs/cacti.jpg";
import Typewriter from "typewriter-effect";
import { randQuote } from "../components/typescript/array";
import WhyUs from "../components/whyUs/whyUs";
import Article from "../components/article/article";
import { Link } from "react-router-dom";
import { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { getProducts } from "../redux/features/productSlice";
import { useFetch } from "../redux/fetch";
import { useSelector } from "react-redux";
import VisitStore from "../components/visitStore/visitStore";
import ShowCollection from "../components/collections/collection";
import { Paper, Button } from "@mui/material";
import ProductCarousel from "../components/carousel/carousel";

var items = [
  {
    link: landingImg,
  },
  {
    name: "Cactus ?",
    description:
      "Les Cactus se distinguent des autres succulentes par leurs excroissances – qui peuvent être par exemple des coussinets d'aiguillons (glochides), des poils ou bien encore des épines – et que l'on appelle les aréoles. On les trouve exclusivement chez les Cactées.",
    link: landingTwo,
  },
  {
    name: "",
    description: "",
    link: landingThree,
  },
  {
    name: "Bien assurer la croissance de vos plantes",
    description:
      "Il est important d'adapter le substrat utilisé au type de plante. Plusieurs mélanges sont possibles à partir de terre brune, de mousse de tourbe, de perlite ou de vermiculite.",
    link: landingFour,
  },
];

function Landing() {
  function Item(props) {
    return (
      <div className="mainCarousel">
        <Paper>
          <div>
            <div>
              <img
                style={{
                  width: "100%",
                  minHeight: "500px",
                  maxHeight: "550px",
                  position: "relative",
                  objectFit: "contain",
                }}
                src={props.item.link}
                alt="img"
              />
            </div>
            {props.item.name && (
              <div
                className="propStyle"
                style={{
                  position: "absolute",
                  bottom: "0em",
                  display: "block",
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  color: "white",
                  padding: "1em .7em ",
                }}
              >
                <h4>{props.item.name}</h4>
                <p>{props.item.description}</p>
              </div>
            )}
          </div>

          {/* <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <img src={props.item.link} alt="img" /> */}
        </Paper>
      </div>
    );
  }
  return (
    <div>
      <section className="sec_one">
        <div className="top_landing col-md-11 flex-lg-row">
          <div
            style={{
              margin: "3em 3em",
              maxWidth: "90%",
              position: "relative",
            }}
            className="topLeft col-md-4 "
          >
            <div className="topLeftText mt-0">
              <img
                className="logo"
                style={{ maxWidth: "200px" }}
                src={blackLogo}
                alt="logo"
              />
              <h2>Bienvenue</h2>
              <h5>dans le monde des plantes</h5>
            </div>
            <div
              style={{
                position: "absolute",
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.changeDelay(50);
                  typewriter.typeString(randQuote).start();
                }}
              />
            </div>
          </div>
          <div className="carousel col-md-8 flex-lg-row">
            <div className="slider-container">
              <Carousel
                className="carousel-style"
                showArrows={true}
                showThumbs={false}
                showStatus={false}
              >
                {items.map((item, i) => (
                  <Item className="slider-item-div" key={i} item={item} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div>
          <ShowCollection />
        </div>
      </section>
      <section
        className="col-12"
        style={{
          marginTop: "2em",
        }}
      >
        <div className="carousel">
          <div>
            <Link className="shop_link" to="/shop?browse=Plante d'extérieur">
              <span>{`Nos plantes les plus vendues >`}</span>
            </Link>
          </div>
          <ProductCarousel items={"Plante d'extérieur"} />
        </div>
        <div className="carousel">
          <div>
            <Link className="shop_link" to="/shop?browse=Fleurs">
              <span>{`Bouquets De Fleurs >`}</span>
            </Link>
          </div>
          <ProductCarousel items={"Fleurs"} />
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
