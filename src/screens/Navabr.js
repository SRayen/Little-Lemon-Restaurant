import { React, useState } from "react";
import logo from "./images/logo_header.png";
import { useNavigate } from "react-router-dom";
import Dialog from "./Dialog";
import "./Navbar.css";

export const Navabr = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBook = () => {
    navigate("/reserveTable");
  };
  const handleMenu = () => {
    navigate("/menu");
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo-header">
        <a onClick={handleHome}>
          <img src={logo} alt="" width={200} height={50}></img>
        </a>
      </div>

      <nav className="nav">
        <input type="checkbox" className="toggle-menu" />
        <div className="hamburger"></div>
        <ul className="menu">
          <li>
            <a className="menuItems" onClick={handleHome}>
              Home
            </a>
          </li>
          <li>
            <a className="menuItems" onClick={handleMenu}>
              Menu
            </a>
          </li>
          <li>
            <a className="menuItems" onClick={handleBook}>
              Book
            </a>
          </li>
          <li>
            <a className="menuItems" onClick={handleClickOpen}>
              About
            </a>
            <Dialog open={open} handleClose={handleClose} />
          </li>
          <li>
            <a className="logIn">Log In</a>
          </li>
        </ul>
        <ul className="log"></ul>
      </nav>
    </header>
  );
};
