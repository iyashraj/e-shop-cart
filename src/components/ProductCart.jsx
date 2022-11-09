import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import { cartAddItem, cartRemoveItem } from "../redux/cart/cartAction";
import CartActionButton from "./cartActionButton/CartActionButton";
import {selectCartItems,selectCartItemsCount} from '../redux/cart/cartSelector'

const ProductCart = ({
  thumbnail,
  title,
  description,
  price,
  rating,
  stock,
  id,
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,

}) => {
  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };


  return (
    <CartItem>
      <img
        src={thumbnail}
        alt={title}
        height={"120px"}
        width={"150px"}
        style={{ objectFit: "contain" }}
      />
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <p className="title">{title}</p>
        <p
          style={{
            fontSize: "20px",
            color: "gray",
            fontWeight: "600",
            marginTop: "8px",
          }}
        >
          ${price}
        </p>
      </div>
      <h3 className="description">{description}</h3>
      <p className="rating">Rating : {rating} / 5</p>
      {stock < 50 && <p className="itemAlert">hurry! only a few items left.</p>}
      <CartActionButton
        quantity={handleQuantity()}
        handleAddItem={() => cartAddItem(item)}
        handleRemoveItem={() => cartRemoveItem(item)}
      />
    </CartItem>
  );
};

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 375px;
  gap: 3px;
  margin: 10px;
  border-radius: 7px;
  border: 1px solid lightgray;
  .title {
    font-size: 20px;
    font-weight: 600;
    color: black;
    margin-top: 8px;
  }
  .description {
    color: gray;
    width: 320px;
    margin-top: 5px;
    text-align: center;
    font-size: 14px;
  }
  .rating {
    color: black;
    font-size: 14px;
  }
  .itemAlert {
    color: red;
    font-weight: 500;
  }
  button {
    height: 35px;
    width: 125px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: green;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    margin-top: 10px;
  }
`;

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item)=> dispatch(cartAddItem(item)),
  cartRemoveItem: (item)=> dispatch(cartRemoveItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCart);
