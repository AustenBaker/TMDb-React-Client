import React, { useState, useEffect } from "react";
import axios from "axios";
import Radio from "./components/Radio";
import Card from "../../components/Movie/Card";
import Pagination from "../../components/Pagination/Pagination";
const html = document.querySelector('html');
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;

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

  const fetchMovies= async (selected, currentPage) => {
    try{
      const url = 'https://api.themoviedb.org/3/movie/' + selected + '?api_key=' +  TMDB_KEY + '&page=' + currentPage;
      const response = await axios(url);
      setData(response.data);
      setLoaded(true);
    }catch(err){
      console.error(err);
    }
  };
  
  useEffect(() => {
    setLoaded(false);
    fetchMovies(selected, currentPage);
  }, [selected, currentPage])

  if(loaded){
    let backdropIMG = 'https://image.tmdb.org/t/p/original' + data.results[0].backdrop_path;
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