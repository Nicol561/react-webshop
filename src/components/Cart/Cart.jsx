import CartPrice from "./CartPrice";
import CartInfo from "./CartInfo";

function Cart() {
  return (
    <main>
      <div className="small-container cart-page">
        <CartInfo />
        <CartPrice />
      </div>
    </main>
  );
}

export default Cart;
