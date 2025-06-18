import burgerIcon from "../../assets/burgerIcon.svg";
import closeIcon from "../../assets/close 1.svg";
import "./Navbar.css";
import { useState } from "react";
import { useEffect } from "react";
import type { NavProps } from "../../Types/Type";
import { NavLinkData } from "../../Data";
import { Link } from "react-router-dom";
const Navbar = ({ logo, btnTitle }: NavProps<string>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);
  const [mainActive, setMainActive] = useState<string>("Home");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${isScrolled ? "scrolled" : ""} ${open ? "white-nav" : ""}`}
    >
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="mainList">
          {NavLinkData.map((link, index) => (
            <li key={index}>
              <Link
                onClick={() => setMainActive(link.label)}
                className={mainActive == link.label ? "mainNavActive" : ""}
                to={link.link}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="loginBtn">
          <button>{btnTitle}</button>
        </div>

        <div onClick={() => setOpen(!open)} className="burgerIcon">
          <img src={open ? closeIcon : burgerIcon} alt="b-icon" />
        </div>
        <div className={`mobile-list ${open ? "openList" : ""}`}>
          <ul className="list">
            {NavLinkData.map((link, index) => (
              <li
                onClick={() => setActive(index)}
                className={active == index ? "active" : ""}
                key={index}
              >
                <Link to={link.link}>{link.label}</Link>
              </li>
            ))}

            <button className="mobileLogin">login</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
