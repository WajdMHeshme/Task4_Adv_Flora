import "./Hero.css";
import heroImage from "../../assets/modern-residential-building-transformed 1.png";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHouseChimney } from "react-icons/fa6";
const Hero = () => {
  return (
    <section
    data-aos = "fade-down"
    data-aos-duration="1500"
     id="hero">
      <div className="container">
        <div className="heroImage">
          <img  src={heroImage} alt="heroImg" />
        </div>

        <div className="desc">
          <div className="text">
            <div className="title">
              <h1>Discover a place you will love to live</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              tempus felis vitae sit est quisque.
            </p>
          </div>

          <div  className="info">
            <div className="col">
              <div className="icon">
                <FaLocationDot />
              </div>
              <div className="text-info">
                <h3>Location</h3>
                <p>Ahmedabad, India</p>
              </div>
            </div>
            <div className="col">
              <div className="icon">
                <AiFillDollarCircle />
              </div>
              <div className="text-info">
                <h3>Price</h3>
                <p>$1000 - $10,000a</p>
              </div>
            </div>
            <div className="col">
              <div className="icon">
                <FaHouseChimney />
              </div>
              <div className="text-info">
                <h3>Type of Property</h3>
                <p>Apartment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
