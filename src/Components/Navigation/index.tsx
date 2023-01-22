import Styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import React from "react";

export const Navigation: React.FC = (): JSX.Element => {
  return (
    <nav className={Styles.nav}>
      <Link className="brand" to="/">
        <img alt="logo" src={"/icons/G.png"} />
        ovannon
      </Link>
      <input id="bmenub" type="checkbox" className="show" />
      <label htmlFor="bmenub" className="burger pseudo button">
        &#8801;
      </label>

      <div className={`menu ${Styles.navItems}`}>
        <Link to="/">
          <img alt="home" src={"/icons/home-icon.png"} />
          <span>Home</span>
        </Link>
        <Link to="/developers">
          <img alt="code" src={"/icons/code-icon.png"} />
          <span>Developers</span>
        </Link>
        <Link to="/infra">
          <img alt="cloud" src={"/icons/cloud-icon.png"} />
          <span>Infra</span>
        </Link>
        <Link to="/consultancy">
          <img alt="consultancy" src={"/icons/consultancy-icon.png"} />
          <span>Consultancy</span>
        </Link>
        <Link to="/contact">
          <img alt="contact" src={"/icons/contact-icon.png"} />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};
