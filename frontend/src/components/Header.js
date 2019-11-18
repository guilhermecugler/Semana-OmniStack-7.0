import React from "react";
import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="InstaDev" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar publicação" />{" "}
        </Link>
      </div>
    </header>
  );
}
