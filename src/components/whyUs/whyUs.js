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
          Why us?
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
              <strong>Unbeatable quality</strong> <br /> We source directly from
              top-rated growers, so we can sell the finest quality plants at the
              very best prices.
            </p>
          </div>
          <div id="item" style={{ marginRight: "5%" }}>
            <img
              style={{ maxWidth: "100px", height: "100px" }}
              src={delivery}
              alt="delivery"
            />
            <p style={{ marginTop: "2em" }}>
              <strong>Fast delivery</strong> <br /> We’ll bring your plants to
              your door, anywhere in Algeria. If you’re not 100% happy, tell us
              within 30 days and we’ll sort it.
            </p>
          </div>
          <div id="item" style={{ marginRight: "5%" }}>
            <img
              style={{ maxWidth: "100px", height: "100px" }}
              src={assistance}
              alt="assistance"
            />
            <p style={{ marginTop: "2em" }}>
              <strong>All the help you need</strong> <br /> We’ll send you a
              free plant-parenting course and our plant doctors are always on
              call.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
