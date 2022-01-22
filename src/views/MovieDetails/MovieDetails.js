import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import './MovieDetails.css';
import Loader from "../../components/Loader/Loader";

const html = document.querySelector('html');
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;

export default function MovieDetails() {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  const fetchMovieDetails = async (id) => {
    try{
      const response = await axios("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + TMDB_KEY + "&append_to_response=credits");
      setData(response.data);
      setLoaded(true);
    }catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    setLoaded(false);
    fetchMovieDetails(id);
  }, [id])

  if (!loaded) {
    return <Loader />
  } else if (loaded) {

    let revenue = "$" + data.revenue.toLocaleString();
    if( revenue === "$0") {
      revenue = "N/A";
    }
    let backdropIMG = 'https://image.tmdb.org/t/p/original' + data.backdrop_path;
    html.style.backgroundImage = 'url(' + backdropIMG + ')';

    return (
      <div id="detailsPage">
        <div id="detailsContainer">
          <div id="detailsTextContainer">
            <div style={{color: "white", fontSize: 32, fontWeight: 500}}>{data.title}</div>
            <div style={{color: "#01d277", fontSize: 20, fontWeight: 500}}>{data.tagline}</div>
            <p style={{color: "white", fontSize: 16}}>{data.overview}</p>
            <br></br>

            <div style={{color: "white", fontSize: 24}}>{data.genres.map(i => i.name + " ")}</div>

            <br></br>

            <div>
              <div style={{color: "white", fontSize: 16}}>Runtime:</div>
              <div style={{color: "#01d277", fontSize: 24}}> {data.runtime} mins</div>

              <div style={{color: "white", fontSize: 16}}>Box Office:</div>
              <div style={{color: "#01d277", fontSize: 24}}>{revenue}</div>

              <div style={{color: "white", fontSize: 16}}>Released:</div>
              <div style={{color: "#01d277", fontSize: 24}}>{data.release_date}</div>
            </div>
            
          </div>
          <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} alt={data.title} id="detailsImg" />
        </div>

        <div id="castContainer">
          {data.credits.cast.slice(0,8).map( i => 
            <div className="castCard" key={i.name}>
              <img src={"https://image.tmdb.org/t/p/w185" + i.profile_path} alt={i.name} />
              <p>{i.name}</p>
            </div>
          )}
        </div>
      </div>
    )
  } else { 
    return <div id="detailsPage"></div>
  }
}
