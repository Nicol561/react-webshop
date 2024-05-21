import { useContext, useEffect, useState } from "react";
import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import CartContext from "../Cart/CartContext";

function ProductList() {
  const { addToCart } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  const [priceFilter, setPriceFilter] = useState("all");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <Skeleton height={350} />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const filterByPrice = (minPrice, maxPrice) => {
    const updatedList = data.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setFilter(updatedList);
  };

  const handlePriceFilter = (minPrice, maxPrice) => {
    if (minPrice === 0 && maxPrice === 0) {
      setPriceFilter("all");
      setFilter(data);
    } else {
      setPriceFilter(`${minPrice}-${maxPrice}`);
      filterByPrice(minPrice, maxPrice);
    }
  };

  const ShowProducts = () => {
    return (
      <>
        <h2 className="text-center">Filters</h2>
        <div className="buttons d-flex justify-content-center  pb-5">
          <button
            className="btn btn-outline-dark me-2 mt-2 "
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2 mt-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 mt-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Womans's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2 mt-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2 mt-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className={`btn btn-outline-dark me-2 mt-2 ${
              priceFilter === "all" ? "active" : ""
            }`}
            onClick={() => handlePriceFilter(0, 0)}
          >
            All Prices
          </button>
          <button
            className={`btn btn-outline-dark me-2 mt-2 ${
              priceFilter === "0-50" ? "active" : ""
            }`}
            onClick={() => handlePriceFilter(0, 50)}
          >
            Below $50
          </button>
          <button
            className={`btn btn-outline-dark me-2 mt-2 ${
              priceFilter === "50-100" ? "active" : ""
            }`}
            onClick={() => handlePriceFilter(50, 100)}
          >
            $50 - $100
          </button>
          <button
            className={`btn btn-outline-dark me-2 mt-2 ${
              priceFilter === "100-500" ? "active" : ""
            }`}
            onClick={() => handlePriceFilter(100, 500)}
          >
            Above $100
          </button>
        </div>

        {filter.map((product) => {
          const slicedDesc =
            product.description.length > 100
              ? product.description.slice(0, 100) + "..."
              : product.description;

          return (
            <React.Fragment key={product.id}>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card h-100 text-center p-4">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-titl mb-0">
                      {product.title.substring(0, 12)}
                      ...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <p className="card-text">{slicedDesc}</p>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <NavLink
                      to={`/product/${product.id}`}
                      className="btn btn-outline-dark me-2"
                    >
                      Product detail
                    </NavLink>
                    <a
                      href="#"
                      className="btn btn-outline-dark"
                      onClick={() => addToCart(product)}
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-1 fw-bolder text-center ">Our products</h1>
          <p className="lead mt-5 text-center">
            Explore our diverse range of high-quality products that cater to
            every need and style. From trendy fashion pieces to cutting-edge
            electronics and exquisite jewelry, we have something for everyone.
            Whether you're looking to upgrade your wardrobe, accessorize with
            elegance, or enhance your living space with the latest gadgets,
            we've got you covered.
          </p>
          <hr></hr>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default ProductList;
