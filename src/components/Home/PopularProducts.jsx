function PopularProducts() {
  return (
    <div>
      {/*popularni proizvodi*/}
      <div className="popular_products">
        <h2 className="naslov_h2">Most popular products</h2>
        <div className="product-cards">
          <div className="card">
            <img
              className="image-artisan"
              src="https://placehold.co/300x300"
              alt="Artisan"
              title="oil color"
            />
            <h3>Winsor &amp; Newton Artisan Water Mixable Oil Colour set</h3>
            <p className="price">€ 32,33</p>
            <p>
              Is a genuine oil colour made from modified linseed oil and
              modified safflower oil.
            </p>
            <p>
              <button>Add to Cart</button>
            </p>
            <p>
              {" "}
              <a href="product-detail.html">
                {" "}
                <button>View Product</button>
              </a>
            </p>
          </div>
          <div className="card">
            <img
              className="image-artisan"
              src="https://placehold.co/300x300"
              alt="Royal"
              title="paint by numbers"
            />
            <h3>
              Royal &amp; Langnickel Paint By Numbers A4 Artist Canvas Kit
            </h3>
            <p className="price">€ 8,32</p>
            <p>
              Allows the artist to take painting to the next level by using real
              canvas. and create a master piece.
            </p>
            <p>
              <button>Add to Cart</button>
            </p>
            <p>
              {" "}
              <a href="product-detail2.html">
                {" "}
                <button>View Product</button>
              </a>
            </p>
          </div>
          <div className="card">
            <img
              className="image-artisan"
              src="https://placehold.co/300x300"
              alt="Primer"
              title="gesso primer"
            />
            <h3>
              Winsor &amp; Newton Artisan Professional Acrylic Gesso Primer
            </h3>
            <p className="price">€ 16,33</p>
            <p>
              A gesso with a superior level of pigmentation giving maximum
              covering power.
            </p>
            <p>
              <button>Add to Cart</button>
            </p>
            <p>
              {" "}
              <a href="product-detail3.html">
                {" "}
                <button>View Product</button>
              </a>
            </p>
          </div>
          <div className="card">
            <img
              className="image-artisan"
              src="https://placehold.co/300x300"
              alt="Artisan"
              title="canvas"
            />
            <h3>PHOENIX Stretched Canvas for Painting 8x10 Inch</h3>
            <p className="price">€ 22,99</p>
            <p>
              Canvas frame with triple layer of universal primer Phoenix Made of
              white gesso, for any painting technique.
            </p>
            <p>
              <button>Add to Cart</button>
            </p>
            <p>
              {" "}
              <a href="product-detail4.html">
                {" "}
                <button>View Product</button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
