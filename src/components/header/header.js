import { Link, useLocation } from "react-router-dom";
import { Component } from "react";
import Button from "../Button/Button.js";
import './header.css'
import Logo from "../Logo/Logo.js";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const text = "👤"; // Пример текста для кнопки
  return (
      <header>
      <div className="header-container flex-box-between">
        <Logo></Logo>
        <Button></Button>
        <div>
          <div className="header-information flex-box-between">
            {/* <a className="lng-home1" href="">HOME</a> */}
            <Link to="/" className="lng-home1"  >HOME</Link>
            {/* <a className="lng-abo" href="about/about.html">ABOUT</a> */}
            <Link to="/about_us" className="lng-abo"  >ABOUT</Link>

            <Link to="/WeAre" className="lng-abo"  >WORK WITH US</Link>

            <a className="lng-CLIENT" href="">CLIENT WINS</a>
            <a className="lng-EMPLOYERS" href="">EMPLOYERS</a>
            <button className="profile123" onClick={() => setModalActive(true)}>
            {text}</button>

          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </header>
    );
  }

export default Header;