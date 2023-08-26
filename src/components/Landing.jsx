import React from "react";
import SearchBar from "./ui/SearchBar";
import streamingServiceLogos from "../assets/streaming-service-logos.png"

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="header__wrapper">
            <h1 className="section__title">
              Australia's <span className="orange">#1 most awarded</span> movie
              streaming site
            </h1>
            <SearchBar/>
            <h2 className="section__subtitle">
              View your favourite movies 
              <span className="orange"> on demand</span> from
            </h2>
            <figure className="header-img__wrapper">
              <img
                className="header-img"
                src={streamingServiceLogos}
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
