import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function SearchBar() {
  const [search,setSearch] = useState("")

  useEffect(()=>{console.log(search)},[search])
 
  return (
    <div class="input__wrapper">
      <div class="search-bar__wrapper">
        <input
          class="search-bar"
          type="text"
          placeholder="Search!"
          onChange={(event)=>{setSearch(event.target.value)}
          
        }
        />
      </div>
      <Link to={`/${search}`} replace>
      <FontAwesomeIcon icon="search" className="fas fa-search click"/>
      </Link>
    </div>
  );
}

export default SearchBar;
