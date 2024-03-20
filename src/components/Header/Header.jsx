import { NavLink, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="top-row">
        <nav>
          <ul className="nav_1">
            <li>
              <a href="mailto:john@example.com">Mail</a>
            </li>
            <li>
              <a href="tel:+91123-456-7890">Phone number</a>
            </li>
            <li>
              <a href="https://www.facebook.com/?locale=hr_HR" target="_blank">
                <i className="fa-brands fa-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <form
                className="example"
                action="/action_page.php"
                style={{ margin: "auto", maxWidth: 300 }}
              >
                <input type="text" placeholder="Search.." name="search2" />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
            </li>
            <li>
              <NavLink to="/cart">
                <i className="fa-solid fa-cart-shopping" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bottom-row">
        <nav>
          <ul className="nav_2">
            <li>
              <Link to="/">
                <span className="logo">
                  MyArt
                  <i className="fa-solid fa-palette" />
                </span>
              </Link>
            </li>
            <li className="one">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="two">
              <NavLink to="/product">Products</NavLink>
            </li>
            <li className="two">
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li className="three">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="four">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="five">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
