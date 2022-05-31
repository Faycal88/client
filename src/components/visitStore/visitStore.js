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
        <h3>Visit Us In A Store Near You</h3>
        <p>
          Our stores around the Country are open for plant shopping, repotting,{" "}
          <br />
          curbside pickup, in-person workshops, and more.
        </p>
        <button
          onClick={() => (window.location.href = "/stores")}
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <span className="Link">{`Find Your Local Store >`} </span>
        </button>
      </div>
    </div>
  );
}

export default VisitStore;
