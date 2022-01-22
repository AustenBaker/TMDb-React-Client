import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";

import MovieIMG from "./PosterImage";
import NumberRating from "./NumberRating";

export default function MovieCard(props) {
  const [style, setStyle] = useState("hide-overlay");
  const history = useHistory();

  function handleClick(id) {
    history.push("/details/" + id);
  }

  function showOverlay() {
    if (style === "show-overlay") {
      setStyle("hide-overlay");
    } else {
      setStyle("show-overlay");
    }
  }

  return(
    <div className="cardContainer" onClick={() => showOverlay()}> 
      <MovieIMG poster_path={props.movie.poster_path} title={props.movie.title} /> 
      <NumberRating rating={props.movie.vote_average} />
      <div className={style}  >
        <div className="overlayContainer">
          <div className="movieTitle"> {props.movie.title} </div>
          <button className="detailsButton" onClick={() => handleClick(props.movie.id)} >More Details</button>
        </div>
      </div>
    </div> 
  );
}