import React, { useState, useEffect } from "react";
import Card from "../../components/Movie/Card";
import Genres from "./components/Genres";
import Pagination from "../../components/Pagination/Pagination";
import { GetGenreMovies } from "../../api/GetGenreMovies";
const html = document.querySelector('html');

function Skeleton() {
  return (<div className="skeleton"></div>);
}

export default function Home() {
  const [genreId, setGenreId] = useState("");
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const skeletons = [];

  for(let i=0; i<20; i++){
    skeletons.push(<Skeleton key={i} />);
  }

  const fetchGenreMovies = async (genreId, currentPage) => {
    let movies = await GetGenreMovies(genreId, currentPage);
    setData(movies);
    setLoaded(true);
  }

  useEffect(() => {
    setLoaded(false);
    fetchGenreMovies(genreId, currentPage);
  }, [genreId, currentPage])

  if(loaded){
    let backdropIMG = 'https://image.tmdb.org/t/p/w500' + data.results[0].backdrop_path;
    html.style.backgroundImage = 'url(' + backdropIMG + ')';
  }

  return(
    <div>
      <Genres setGenreId={setGenreId} />
      <div className="moviesContainer">
        {loaded ? data.results.map( movie => 
          <Card movie={movie} key={movie.id} /> 
        ) : <div>{skeletons}</div>}
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={data.total_pages} />
    </div>
  );
}