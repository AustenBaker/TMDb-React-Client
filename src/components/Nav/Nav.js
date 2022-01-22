import React, { useState } from "react";
import { useHistory } from "react-router";
import logo from "../../assets/svg/logo.svg";
import './Nav.css';

export default function Nav(){

  const history = useHistory();
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //trigger SearchResults.js
    history.push("/key/" + input);
  }

  function handleClick() {
    //trigger Home.js
    setInput("");
    history.push("/");
  }

  return(
    <nav id="searchContainer">   
      <img id="logo" src={logo} alt="logo" onClick={handleClick}></img>  

      <form id="searchBar" onSubmit={handleSubmit}>
        <input 
          type="text" name="key" value={input} onChange={handleChange} 
          id="searchInput" placeholder="Search here..."
        />
      </form>
    </nav>
  );  
}