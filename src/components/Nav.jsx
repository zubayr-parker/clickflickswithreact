import React from "react";
import clickflicksLogo from "../assets/clickflicks-high-resolution-logo-black-on-transparent-background.png"
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div class="nav__wrapper">
        <nav>
          <Link to="/">
            <img
              src={clickflicksLogo}
              alt=""
              class="logo"
            />
          </Link>
          <ul class="nav__link--list">
            <li class="nav__link">
              <Link class="nav__link--anchor link__hover-effect" to="/">
                Home
              </Link>
            </li>
            
            <li class="nav__link">
              <Link
                class="nav__link--anchor nav__link--anchor-primary"
                to="mailto:zubayr_parker@outlook.com"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button class="btn__menu click" onclick="openMenu()">
            <i class="fas fa-bars"></i>
          </button>

          <div class="menu__backdrop">
            <button
              class="btn__menu btn__menu--close click"
              onclick="closeMenu()"
            >
              <i class="fas fa-times click"></i>
            </button>
            <ul class="menu__links">
              <li class="menu__list">
                <Link to="index.html" class="menu__link" onclick="closeMenu()">
                  Home
                </Link>
              </li>
              
              <li class="menu__list">
                <Link
                  class="menu__link"
                  to="mailto:zubayr_parker@outlook.com"
                  onclick="closeMenu()"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav;
