import image from "../../assets/under-development.png";
import "./Soon.css";
const Soon = () => {
  return (
    <div>
      <div className="container">
        <div className="imageSoonDev">
          <img src={image} alt="img" />
        </div>
        <div className="txt">
          <span data-aos="zoom-out" data-aos-delay="200">
            C
          </span>
          <span data-aos="zoom-out" data-aos-delay="400">
            o
          </span>
          <span data-aos="zoom-out" data-aos-delay="600">
            m
          </span>
          <span data-aos="zoom-out" data-aos-delay="800">
            i
          </span>
          <span data-aos="zoom-out" data-aos-delay="800">
            n
          </span>
          <span data-aos="zoom-out" data-aos-delay="1000">
            g
          </span>{" "}
          <span data-aos="zoom-out" data-aos-delay="1200">
            S
          </span>
          <span data-aos="zoom-out" data-aos-delay="1400">
            o
          </span>
          <span data-aos="zoom-out" data-aos-delay="1600">
            o
          </span>
          <span data-aos="zoom-out" data-aos-delay="1800">
            n
          </span>{" "}
          <span data-aos="fade-left" data-aos-delay="2200">
            !
          </span>
        </div>
        <div className="info">
          Sorry, Dev Titos is busy, but I’ll be sure to check back for updates! ;)
        </div>
      </div>
    </div>
  );
};

export default Soon;
