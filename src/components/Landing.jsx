import React from "react";
import SearchBar from "./ui/SearchBar";
import streamingServiceLogos from "../assets/streaming-service-logos.png"

function Header() {
  return (
    <header>
      <div class="container">
        <div class="row">
          <div class="header__wrapper">
            <h1 class="section__title">
              Australia's <span class="orange">#1 most awarded</span> movie
              streaming site
            </h1>
            <SearchBar/>
            <h2 class="section__subtitle">
              View your favourite movies 
              <span class="orange"> on demand</span> from
            </h2>
            <figure class="header-img__wrapper">
              <img
                class="header-img"
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
