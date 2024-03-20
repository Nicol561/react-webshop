import { Outlet } from "react-router-dom";

function Product() {
  return (
    <div className="product-wrapper">
      <h2>Article content comes here</h2>
      <Outlet />
    </div>
  );
}

export default Product;
