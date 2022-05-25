import Bag from "../components/bag/bag";
import { useSelector } from "react-redux";

function Checkout() {
  let cart = localStorage.getItem("cart");
  let cartItems = JSON.parse(cart);
  return (
    <div>
      <div style={{ margin: "4em 2em 0em 2em" }}>
        <h1>Checkout</h1>
        <Bag items={cartItems} />
      </div>
    </div>
  );
}

export default Checkout;
