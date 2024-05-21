import { Link } from "react-router-dom";
import "./Footer.css";
//import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="container-fluid footer">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h4>Navigation</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 link-f-color">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/contact" className="nav-link p-0 link-f-color">
                  Contact
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/product" className="nav-link p-0 link-f-color">
                  Products
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/categories" className="nav-link p-0 link-f-color">
                  Categories
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/blog" className="nav-link p-0 link-f-color">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h4>Information</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/privacy" className="nav-link p-0 link-f-color">
                  Privacy policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/terms" className="nav-link p-0 link-f-color">
                  Terms of service
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/cookies" className="nav-link p-0 link-f-color">
                  Cookie policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/faq" className="nav-link p-0 link-f-color">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/about" className="nav-link p-0 link-f-color">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h4>Location</h4>
            <ul className="nav flex-column">
              <iframe
                className="iframe_lokacija"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.986286205162!2d15.894788975661536!3d43.73161174735659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133525f4e261e317%3A0x45c2193023827677!2sCity%20Life!5e0!3m2!1shr!2shr!4v1705255131998!5m2!1shr!2shr"
                width={250}
                height={150}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h4>Subscribe to our newsletter</h4>
              <p className="news">
                By clicking the subscribe button you agree to our{" "}
                <Link to="/terms">Terms of service</Link>
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-secondary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 StyleSlash Closet. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a href="https://twitter.com/" target="_blank">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li className="ms-3">
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li className="ms-3">
              <a href="https://www.facebook.com/?locale=hr_HR" target="_blank">
                <i className="fa-brands fa-facebook" />
              </a>
            </li>
            <li className="ms-3">
              <a href="tel:+91123-456-7890">
                <i className="fa-solid fa-square-phone-flip" />
              </a>
            </li>
            <li className="ms-3">
              <a href="mailto:john@example.com">
                <i className="fa-solid fa-envelope" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
