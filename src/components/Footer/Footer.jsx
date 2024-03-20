import "./Footer.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="navigation">
            <h4 className="naslov">Navigation</h4>
            <ul>
              <li className="one">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="two">
                <NavLink to="/product">Products</NavLink>
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
          </div>
          <div className="contact">
            <h4 className="naslov">Contact</h4>
            <ul>
              <li>
                <a href="mailto:john@example.com">
                  <i className="fa-solid fa-envelope" />
                </a>
                -Mail
              </li>
              <li>
                <a href="tel:+91123-456-7890">
                  <i className="fa-solid fa-square-phone-flip" />
                </a>
                -Phone
              </li>
              <li>
                <a
                  href="https://www.facebook.com/?locale=hr_HR"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook" />
                </a>
                -Facebook
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="fa-brands fa-instagram" />
                </a>
                -Instagram
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <i className="fa-brands fa-twitter" />
                </a>
                -Twitter
              </li>
            </ul>
          </div>
          <div className="info">
            <h4 className="naslov">Information</h4>
            <ul>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/cookies">Cookie policy</NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms of service</NavLink>
              </li>
              <li>
                <NavLink to="/privacy">Privacy policy</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
            </ul>
          </div>
          <div className="lokacija">
            <h4 className="naslov">Location</h4>
            <iframe
              className="iframe_lokacija"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.986286205162!2d15.894788975661536!3d43.73161174735659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133525f4e261e317%3A0x45c2193023827677!2sCity%20Life!5e0!3m2!1shr!2shr!4v1705255131998!5m2!1shr!2shr"
              width={150}
              height={150}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
