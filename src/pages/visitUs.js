import imgOne from ".././imgs/insideOne.jpg";
import imgTwo from ".././imgs/insideTwo.jpg";
import "./styles/visitUs.css";

function VisitUs() {
  return (
    <div
      style={{
        margin: "4em  2em",
      }}
      className="visitUs"
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#B0ECAE",
        }}
        className="frame"
      >
        <div className="col-md-4 d-flex flex-column m-2 align-items-center justify-content-center">
          <h1>Localisation</h1>
          <p>
            L'éternelle Des Plantes possède des magasins de plantes dans la
            wilayas d'Alger qui offrent plein de variétés de plantes et de
            fleurs coupées,un service de rempotage, la livraison locale,
            organisation d'évenements , et aménagement des espaces.
          </p>
        </div>
        <div className="col-md-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.5880601569443!2d3.0605165145374067!3d36.73245347996256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128faf1b65104e6f%3A0x7caa2a41cbc04095!2sL&#39;%C3%A9ternelle%20Des%20Plantes!5e0!3m2!1sen!2sdz!4v1653422254061!5m2!1sen!2sdz"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="info">
        <div className="d-flex mt-5 info justify-content-evenly">
          <div className="col-md-4 d-flex flex-column m-2 align-items-center justify-content-center">
            <h3>esplanade d'éxposition</h3>
            <h4>Kouba "La placette"</h4>
            <div
              style={{
                height: ".1em",
              }}
              className="d-block w-100 bg-dark mt-3 mb-3"
            ></div>
            <ul>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <p style={{ color: "#00997A" }}>
                  - Différentes variétés de platanes
                </p>
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <p style={{ color: "#00997A" }}>
                  - Aquariums et accessoires, poissons
                </p>
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <p style={{ color: "#00997A" }}>- terreau compost et engrais</p>
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <p style={{ color: "#00997A" }}>
                  - Service d'aménagement et rempotage
                </p>
              </li>
            </ul>
            <small>+213 555 13 07 56</small>
          </div>
          <div className="col-md-4 d-flex flex-column m-2 align-items-center justify-content-center">
            <h3>Boutique Flower Soul</h3>
            <h4>Garidi 2 en face Sonelgaz</h4>
            <div
              style={{
                height: ".1em",
              }}
              className="d-block w-100 bg-dark mt-3 mb-3"
            ></div>
            <ul>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <p style={{ color: "#00997A" }}>- Bouquets de fleurs</p>
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <p style={{ color: "#00997A" }}>- Plantes exotiques</p>
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <p style={{ color: "#00997A" }}>
                  - Organisation d'événement et fêtes
                </p>
              </li>
              <li
                style={{
                  listStyle: "none",
                }}
              >
                <p style={{ color: "#00997A" }}>
                  - Décoration véhicule de mariage
                </p>
              </li>
            </ul>
            <small>+213 699 39 91 10</small>
          </div>
        </div>
        <div>
          <div
            style={{
              height: ".1em",
            }}
            className="d-block w-100 bg-dark mt-5 mb-5 info"
          ></div>
          <div className="beforeyouGo">
            <h1>Information supplémentaire !</h1>
            <div className="d-flex justify-content-evenly flex-lg-row gap-5">
              <div className="item">
                <img
                  style={{
                    maxWidth: "100%",
                    resizeMode: "cover",
                    position: "relative",
                  }}
                  src={imgOne}
                  alt=""
                />
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "white",
                    zIndex: "1",
                    width: "75%",
                    height: "50%",
                    color: "black",
                    top: "-63%",
                    left: "12.5%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h2>{`Ramassage & livraison`}</h2>
                  <p
                    style={{
                      margin: "0em 2em",
                    }}
                  >
                    Toutes les plantes sont disponibles pour le ramassage en
                    boutique ou par livraison locale. Veuillez noter que les
                    plantes ne peuvent pas être transférées entre les magasins.
                  </p>
                </div>
              </div>
              <div className="item ">
                <img
                  style={{
                    maxWidth: "76%",
                    resizeMode: "cover",
                    position: "relative",
                  }}
                  src={imgTwo}
                  alt=""
                />
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "white",
                    zIndex: "1",
                    maxWidth: "60%",
                    height: "50%",
                    color: "black",
                    top: "-63%",
                    left: "8%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h2>Prix en magasin</h2>
                  <p
                    style={{
                      margin: "0em 2em",
                    }}
                  >
                    Nos plantes proviennent de producteurs locaux pour assurer
                    la la plus haute qualité et pour soutenir les entreprises
                    familiales. L'inventaire et les prix en magasin peuvent
                    différer selon l'emplacement du magasin, et de nos offres en
                    ligne.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitUs;
