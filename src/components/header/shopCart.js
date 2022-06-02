import { useNavigate } from "react-router-dom";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function ShopCart(props) {
  const navigate = useNavigate();
  const cart = localStorage.getItem("cart");
  const cartItems = cart ? JSON.parse(cart) : [];

  React.useEffect(() => {
    const cart = localStorage.getItem("cart");
    const cartItems = cart ? JSON.parse(cart) : [];
  }, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <div onClick={() => navigate("/bag")}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={0} color="success">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
    );
  }

  if (cartItems.length > 0) {
    const ids = cartItems.map((item) => item._id);

    let filtred = cartItems.filter(
      ({ _id }, index) => !ids.includes(_id, index + 1)
    );
    return (
      <div onClick={() => navigate("/bag")}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={filtred.length} color="success">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
    );
  }
}

export default ShopCart;
