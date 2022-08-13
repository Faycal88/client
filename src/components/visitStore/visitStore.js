import visit from "../../imgs/visit.jpg";
import "./visitStore.css";

function VisitStore() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1em",
        margin: "2em 4em 0em 4em",
      }}
      className="visit-store"
    >
      <div className="col-md-4 d-flex justify-content-center ">
        <img
          style={{
            maxWidth: "70%",
            maxHeight: "80%",
          }}
          src={visit}
          alt=""
        />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h3>Visitez-nous dans un magasin près de chez vous</h3>
        <p>
          Nos magasins à travers le pays sont ouverts pour l'achat de plantes,
          le rempotage, <br />
          le ramassage des colis, et plus encore.
        </p>
        <button
          onClick={() => (window.location.href = "/stores")}
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <span className="Link">
            {`Trouver un magasin prés de chez vous >`}{" "}
          </span>
        </button>
      </div>
    </div>
  );
}

export default VisitStore;
