import React from "react";
import "./cartCountButton.css";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";
import { createStructuredSelector } from "reselect";


const CartCountButton = ({ cartCount }) => {
  const navigate = useNavigate();
  return (
    <div className="btnCartCount" onClick={() => navigate("cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  // cartList: selectCartItems
});

export default connect(mapStateToProps)(CartCountButton);