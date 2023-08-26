import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

function SearchBar() {
  const [search,setSearch] = useState("")
  const navigate = useNavigate()

  return (
    <div className="input__wrapper">
      <div className="search-bar__wrapper">
        <input
          className="search-bar"
          type="text"
          placeholder="Search!"
          onChange={(event)=>{setSearch(event.target.value)}}
          onKeyDown={(event) => {
           
            if (event.key === "Enter") {
              
              navigate(`/${search}`)
        } 
      }}
          
        
        />
      </div>
      <Link to={`/${search}`} >
      <FontAwesomeIcon icon="search" className="fas fa-search click"/>
      </Link>
    </div>
  );
}

export default SearchBar;
