function Checkout() {
  return (
    <main>
      <div className="container_checkout">
        <h2>Checkout</h2>
        <form action="#" method="get">
          <div className="input-groups">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required=""
            />
          </div>
          <div className="input-groups">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Your Surname"
              required=""
            />
          </div>
          <div className="input-groups">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required=""
            />
          </div>
          <div className="input-groups">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Your Address"
              required=""
            />
          </div>
          <div className="input-group double">
            <div>
              <label htmlFor="province">Province</label>
              <input
                type="text"
                id="province"
                name="province"
                placeholder="Your Province"
                required=""
              />
            </div>
            <div>
              <label htmlFor="postal-code">Postal Code</label>
              <input
                type="text"
                id="postal-code"
                name="postal-code"
                placeholder="Your Postal Code"
                required=""
              />
            </div>
          </div>
          <div className="input-group double">
            <div>
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Your Country"
                required=""
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Your City"
                required=""
              />
            </div>
          </div>
          <div className="input-groups">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="text"
              id="card-number"
              name="card-number"
              placeholder="Your Card Number"
              required=""
            />
          </div>
          <div className="input-groups">
            <label htmlFor="expiry-date">Expiry Date</label>
            <input
              type="text"
              id="expiry-date"
              name="expiry-date"
              placeholder="MM/YY"
              required=""
            />
          </div>
          <div className="input-groups">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="CVV"
              required=""
            />
          </div>
          <button type="submit" className="button-checkout">
            Place Order
          </button>
        </form>
      </div>
    </main>
  );
}

export default Checkout;
