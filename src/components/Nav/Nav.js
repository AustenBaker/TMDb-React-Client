import React, { useState } from "react";
import { useHistory } from "react-router";
import logo from "../../assets/svg/logo.svg";
import './Nav.css';

export default function Nav(){

  const history = useHistory();
  const [input, setInput] = useState("");

  function handleChange(e) {
    //update user's input 
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //trigger SearchResults.js
    history.push("/key/" + input);
  }

  function handleLogoClick() {
    //clear search input
    setInput("");
    //trigger Home.js
    history.push("/");
  }

  return(
    <nav id="searchContainer">   
      <img id="logo" src={logo} alt="logo" onClick={handleLogoClick}></img>  

      <form id="searchBar" onSubmit={handleSubmit}>
        <input 
          type="text" name="key" value={input} onChange={handleChange} 
          id="searchInput" placeholder="Search here..."
        />
      </form>
    </nav>
  );  
}