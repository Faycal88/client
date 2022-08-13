import quality from "./svgs/quality.svg";
import delivery from "./svgs/delivery.svg";
import assistance from "./svgs/assistance.svg";
import "./whyUs.css";

function WhyUs() {
  return (
    <div className="whyUs">
      <div className="whyUsText">
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Pourquoi nous?
        </h3>
        <div
          className="whyUsTextContent"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            margin: "4em",
          }}
        >
          <div id="item" style={{ marginRight: "5%" }}>
            <img
              style={{ maxWidth: "100px", height: "100px" }}
              src={quality}
              alt="quality"
            />
            <p style={{ marginTop: "2em" }}>
              <strong>Qualité imbattable</strong> <br /> Nous nous
              approvisionnons directement auprès des meilleurs producteurs, afin
              que nous puissions vendre les plantes de la meilleure qualité aux
              meilleurs prix.
            </p>
          </div>
          <div id="item" style={{ marginRight: "5%" }}>
            <img
              style={{ maxWidth: "100px", height: "100px" }}
              src={delivery}
              alt="delivery"
            />
            <p style={{ marginTop: "2em" }}>
              <strong>Livraison rapide</strong> <br /> Nous apportons vos
              plantes à votre porte, en Algérie. Si vous n'êtes pas satisfait à
              100%, dites-le nous et nous réglerons le problème.
            </p>
          </div>
          <div id="item" style={{ marginRight: "5%" }}>
            <img
              style={{ maxWidth: "100px", height: "100px" }}
              src={assistance}
              alt="assistance"
            />
            <p style={{ marginTop: "2em" }}>
              <strong>Besoin d'aide ? </strong> <br /> Nos médecins de plantes
              sont toujours disponibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
