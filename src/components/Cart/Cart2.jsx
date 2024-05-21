import { useContext } from "react";
import CartContext from "./CartContext";

import { Link } from "react-router-dom";
import CartInfo from "./CartInfo";

function Cart2() {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  const delivery = 4.99;
  return (
    <>
      <div className="small-container cart-page">
        {cartItems.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <CartInfo key={item.id} item={item} />
            ))}
          </ul>
        )}
      </div>
      <div className="total-price">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>
                {" "}
                ${" "}
                {cartItems
                  .reduce((amount, item) => item.price + amount, 0)
                  .toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>Delivery</td>
              <td>$ {delivery}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>
                ${" "}
                {(
                  cartItems.reduce((amount, item) => item.price + amount, 0) +
                  delivery
                ).toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/checkout">
                  {" "}
                  <button type="submit" className="cart-button">
                    Checkout
                  </button>{" "}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Cart2;
