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
          <h1>Locations</h1>
          <p>
            L'éternelle Des Plantes has plant shop locations in two wilayas that
            offer specialty plants, repotting, local delivery, and more.
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
        <div className="d-flex mt-5 info">
          <div className="col-md-4 d-flex flex-column m-2 align-items-center justify-content-center">
            <h1>Alger</h1>
            <h4>Kouba - Garidi 2</h4>
            <div
              style={{
                height: ".1em",
              }}
              className="d-block w-100 bg-dark mt-3 mb-3"
            ></div>
            <p style={{ color: "#00997A" }}>En face Sonelgaz Garidi 2</p>
            <small>+213 555 13 07 56</small>
          </div>
          <div className="col-md-4 d-flex flex-column m-2 align-items-center justify-content-center">
            <h1>Tizi-ouzzou</h1>
            <h4>Bouaziz Centre ville</h4>
            <div
              style={{
                height: ".1em",
              }}
              className="d-block w-100 bg-dark mt-3 mb-3"
            ></div>
            <p style={{ color: "#00997A" }}>Arret de bus EPLF Centre-ville</p>
            <small>+213 556 12 54 75</small>
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
            <h1>Before you Go !</h1>
            <div className="d-flex justify-content-space flex-lg-row gap-5">
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
                  <h1>{`Pick-up & Delivery`}</h1>
                  <p
                    style={{
                      margin: "0em 2em",
                    }}
                  >
                    All plants available for curbside pick-up or local delivery.
                    Please note specialty plants cannot be transferred between
                    store locations.
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
                  <h1>In Store Pricing</h1>
                  <p
                    style={{
                      margin: "0em 2em",
                    }}
                  >
                    Our plants are sourced from local growers to ensure the
                    highest quality and to support family-owned businesses.
                    In-store inventory and pricing can differ by shop location,
                    and from our online offerings.
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
