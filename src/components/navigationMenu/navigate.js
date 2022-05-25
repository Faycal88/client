import { Link } from "react-router-dom";
import "./navigate.css";

function Navigate(props) {
  return (
    <div>
      <div>
        <ul className="navigation_menu">
          <li>
            <Link to="/">{props.first}</Link>
          </li>
          <li>
            <Link to={`/${props.second}`}>{props.second}</Link>
          </li>
          <li>
            <Link to={`/${props.third}`}>{props.third}</Link>
          </li>
          <li>
            <Link to={`/${props.fourth}`}>{props.fourth}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigate;
