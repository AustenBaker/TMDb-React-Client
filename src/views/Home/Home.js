import React, { useState, useEffect } from "react";
import Radio from "./components/Radio";
import Card from "../../components/Movie/Card";
import Pagination from "../../components/Pagination/Pagination";
import { GetMovies } from "../../api/GetMovies";
const html = document.querySelector('html');

function Skeleton() {
  return (<div className="skeleton"></div>);
}

export default function Home() {
  const [selected, setSelected] = useState("popular");
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const skeletons = [];

  for(let i=0; i<20; i++){
    skeletons.push(<Skeleton key={i} />);
  }

  const fetchMovies = async (selected, currentPage) => {
    let movies = await GetMovies(selected, currentPage);
    setData(movies);
    setLoaded(true);
  };
  
  useEffect(() => {
    setLoaded(false);
    fetchMovies(selected, currentPage);
  }, [selected, currentPage])

  if(loaded){
    let backdropIMG = 'https://image.tmdb.org/t/p/w500' + data.results[0].backdrop_path;
    html.style.backgroundImage = 'url(' + backdropIMG + ')';
  }

  return(
    <div>
      <Radio setSelected={setSelected} />
      <div className="moviesContainer">
        {loaded ? data.results.map( movie => 
          <Card movie={movie} key={movie.id} /> 
        ) : <div>{skeletons}</div>}
      </div>
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={data.total_pages} />
    </div>
  );
}