import { Link } from "react-router-dom";
function CartPrice() {
  const delivery = 5;

  return (
    <div className="total-price">
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>
              {" "}
              $ {cartItems.reduce((amount, item) => item.price + amount, 0)}
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
              {cartItems.reduce(
                (amount, item) => item.price + amount + delivery,
                0
              )}
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
  );
}

export default CartPrice;
