import { useContext } from "react";
import CartContext from "./CartContext";
function CartInfo({ item }) {
  const { removeItem } = useContext(CartContext);
  return (
    <table>
      <tbody>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <img src={item.image} alt={item.title} />
              <div>
                <p>{item.title.substring(0, 12)}</p>
                <small>Price: $ {item.price}</small>
                <br />
                <button
                  className="CartItem__button"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </td>
          <td>
            <input type="number" defaultValue={1} />
          </td>
          <td> {item.price}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default CartInfo;
