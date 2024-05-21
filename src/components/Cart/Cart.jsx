//import CartPrice from "./CartPrice";
//import CartInfo from "./CartInfo";
import { useContext } from "react";
import CartContext from "./CartContext";
import "./Cart.css";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
function Cart() {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);

  //https://www.youtube.com/watch?v=BmVVkpCBWpQ  1.30 min
  return (
    <main>
      {showCart && (
        <div className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className="fa fa-times-circle"
              aria-hidden="true"
              onClick={showHideCart}
            ></i>
          </div>
          <div className="cart__innerWrapper">
            {cartItems.lenght === 0 ? (
              <h4>Cart is empty</h4>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="Cart__cartTotal">
            <div>Cart total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {cartItems.reduce((amount, item) => item.price + amount, 0)}
              <br></br>
            </div>
            <div>
              <NavLink to="/checkout">Go to checkout page</NavLink>
            </div>
          </div>
        </div>
      )}

      {/*
        <div className="small-container cart-page">
        <CartInfo />
        <CartPrice />
         </div>*/}
    </main>
  );
}

export default Cart;
