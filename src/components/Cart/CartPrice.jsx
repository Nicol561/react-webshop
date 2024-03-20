import { Link } from "react-router-dom";
function CartPrice() {
  return (
    <div className="total-price">
      <table>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>€ 43,07</td>
          </tr>
          <tr>
            <td>Delivery</td>
            <td>€ 4,99</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>€ 48,06</td>
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
