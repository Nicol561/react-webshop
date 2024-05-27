import { NavLink } from "react-router-dom";
import "./Header.css";
import CartContext from "../Cart/CartContext";
import { useContext } from "react";

function Header() {
  const { cartItems, showHideCart } = useContext(CartContext);
  return (
    <div className="main-navbar shadow-sm sticky-top">
      <div className="top-navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
              <NavLink
                className="nav-link brand-name "
                to="/"
                style={{ fontSize: "24px" }}
              >
                StyleStash Closet
              </NavLink>
            </div>
            <div className="col-md-5 my-auto">
              <form role="search">
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="Search for your product here..."
                    className="form-control"
                  />
                  <button className="btn bg-white" type="submit">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-5 my-auto">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart2">
                    <i
                      className="fa fa-shopping-cart"
                      aria-hidden="true"
                      onClick={showHideCart}
                    />{" "}
                    {cartItems.length > 0 && (
                      <div className="items_count badge bg-danger rounded-pill">
                        <span>{cartItems.length}</span>
                      </div>
                    )}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-heart" /> Wishlist (0)
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownUser"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user" /> Username
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownUser"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-user" /> Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-list" /> My Orders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-heart" /> My Wishlist
                      </a>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/cart">
                        <i className="fa fa-shopping-cart" /> My Cart
                      </NavLink>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa fa-sign-out" /> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand d-block d-sm-block d-md-none d-lg-none name"
            to="/"
          >
            StyleStash Closet
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link color" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link color" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link color" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link color" to="/product">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
