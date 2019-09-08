import React from "react";
import "./style.css";
import facebookLogo from "../../assests/facebook-logo.svg";

const Header = () => {
  return (
    <header className="header-page">
      <img className="logo" src={facebookLogo}></img>
      <a className="my-profile-link" href="#">
        meu perfil
      </a>
    </header>
  );
};

export default Header;
