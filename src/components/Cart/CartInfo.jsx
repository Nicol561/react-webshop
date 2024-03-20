function CartInfo() {
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
              <img
                src="images/picture_products/product-kawaii.avif"
                alt="Artisan"
              />
              <div>
                <p>How to Draw Cute Kawaii in Simple Steps by Yishan Li</p>
                <small>Price: € 12,99 </small>
                <br />
                <a href="">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" defaultValue={1} />
          </td>
          <td> € 12,99</td>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <img
                src="./images/picture_products/product-oilpastels.avif"
                alt="Royal"
              />
              <div>
                <p>Sennelier Oil Pastel 12 Stick Introduction Set</p>
                <small>Price: € 21,22 </small>
                <br />
                <a href="">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" defaultValue={1} />
          </td>
          <td>€ 21,22</td>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <img
                src="./images/picture_products/product-niram.avif"
                alt="Artisan"
              />
              <div>
                <p>Nitram Petits Batons Round Charcoal Sticks 5 x 6mm</p>
                <small>Price: € 8,86</small>
                <br />
                <a href="">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" defaultValue={1} />
          </td>
          <td> € 8,86</td>
        </tr>
      </tbody>
    </table>
  );
}
export default CartInfo;
