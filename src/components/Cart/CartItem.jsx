import "./CartItem.css";
import { useContext } from "react";
import CartContext from "./CartContext";

function CartItem({ item }) {
  const { removeItem } = useContext(CartContext);
  return (
    <li className="CartItem__item">
      <img src={item.image} alt={item.title} />
      <div>
        {item.title} ${item.price}
      </div>
      <button className="CartItem__button" onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </li>
  );
}

export default CartItem;
