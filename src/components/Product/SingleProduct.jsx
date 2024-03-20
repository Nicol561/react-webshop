import { Link } from "react-router-dom";

function SingleProduct() {
  return (
    <div className="single-product">
      <h2>Some product</h2>
      <Link to="/about">Go to about page</Link>
    </div>
  );
}

export default SingleProduct;
