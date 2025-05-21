import logo from "../../assets/logo.svg";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn , FaFacebookF } from "react-icons/fa6";
import './Footer.css'
const Footer = () => {
  return (
    <footer  data-aos = "fade-up">
      <div className="container">
        <div className="colContainer">
          <div className="col">
            <div className="imgContent">
              <img src={logo} alt="logo" />
            </div>
            <div className="pgf">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet tempus felis vitae sit est quisque.
              </p>
            </div>
          </div>
          <div className="col1">
            <ul>
                <li className="li-title">Service</li>
                <li><a href="">Payment & Tax</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">View Booking</a></li>
                <li><a href="">Support</a></li>
            </ul>
          </div>

          <div className="col2">
            <ul>
                <li className="li-title">About</li>
                <li><a href="">About us</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">New Property</a></li>
            </ul>
          </div>

          <div className="col3">
            <h4>Our Location</h4>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            <div className="icons">
                <a href="" className="icon">
                    <FaFacebookF />
                </a>
                                <a href="" className="icon">
                    <FaTwitter />
                </a>
                                <a href="" className="icon">
                    <FaLinkedinIn />
                </a>
            </div>
          </div>
        </div>

        <span className="line"></span>

        <div className="endFooter">
            <p>Copyright 2024 flora. All Rights Reserved</p>

            <div className="corner">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
