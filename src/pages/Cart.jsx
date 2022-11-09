import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProductCart from "../components/ProductCart";
import styled from "styled-components";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../redux/cart/cartSelector";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartCount, cartList, cartTotal }) => {
  const navigate = useNavigate();
  return (
    <CartWrapper>
      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="orders__heading">Your Orders</div>
        <button onClick={() => navigate("/")}>Go to Cart</button>
      </div>
      <div className="orders__menu"></div>
      {cartCount === 0 ? (
        <h3>Nothing to preview!</h3>
      ) : (
        <div>
          <div className="order__cart">
            {cartList.map((selectedItem) => (
              <ProductCart
                item={cartList}
                title={selectedItem.title}
                thumbnail={selectedItem.thumbnail}
                price={selectedItem.price}
                description={selectedItem.description}
                id={selectedItem.id}
                rating={selectedItem.rating}
              />
            ))}
          </div>
          <div className="orders__menu"></div>
          <h3 className="orders__total">Your Total ${cartTotal}</h3>
        </div>
      )}
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  button {
    width: 150px;
    height: 45px;
    margin-top: 4rem;
    outline: none;
    border: none;
    background-color: green;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
  }
  h3{
    font-size: 40px;
    color: gray;
    margin-top: 8rem;
  }
  .orders__heading {
    margin-top: 4rem;
    font-size: 2rem;
    font-weight: 600;
  }
  .orders__menu {
    border-top: 2px solid gray;
    width: 80%;
    margin: 20px;
  }
  .order__cart {
    display: flex;
    flex-wrap: wrap;
  }
  .orders__total {
    margin-left: 20px;
  }
`;
const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});
export default connect(mapStateToProps)(Cart);
