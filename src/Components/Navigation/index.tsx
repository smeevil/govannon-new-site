import Styles from "./styles.module.scss";
import { Link, useNavigation } from "react-router-dom";
import React from "react";

export const Navigation: React.FC = (): JSX.Element => {
  return (
    <nav className={Styles.nav}>
      <Link className="brand" to="/">
        Govannon
      </Link>
      <input id="bmenub" type="checkbox" className="show" />
      <label htmlFor="bmenub" className="burger pseudo button">
        &#8801;
      </label>

      <div className="menu">
        <Link to="/">🏠Home</Link>
        <Link to="/developers">💻Developers</Link>
        <Link to="/infra">☁️Infra</Link>
        <Link to="/consultancy">🏢Consultancy</Link>
        <Link to="/contact">📞Contact</Link>
      </div>
    </nav>
  );
};
a