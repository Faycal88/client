import "./collection.css";
import { Link } from "react-router-dom";

function CardCollection(props) {
  return (
    <div className="d-flex gap-1 cardcontainer">
      {props.items &&
        props.items.map((item) => (
          <div className=" col-4" key={item._id}>
            <div className="card-body">
              <div className="card-title">
                <h5>{item.name}</h5>
                <div />
                <div>
                  <Link to={`/shop?collection=${item.name}`}>
                    <img
                      className="card-img-top"
                      src={item.image}
                      alt="profile"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Link>
                </div>

                {/* <div className="mt-3">
                  <p>{`${item.description}`}</p>
                </div> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CardCollection;
