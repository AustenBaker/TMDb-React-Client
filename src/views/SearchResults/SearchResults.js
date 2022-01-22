import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../../components/Movie/Card";
import Pagination from "../../components/Pagination/Pagination";
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;

function Skeleton() { return <div className="skeleton"></div> }

// TODO: Add pagination
export default function SearchResults() {
  const { key } = useParams();
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const skeletons = [];

  for(let i=0; i<20; i++){
    skeletons.push(<Skeleton key={i} />);
  }

  const fetchSearchResults = async (key, currentPage) => {
    try {
      const url = 
        "https://api.themoviedb.org/3/search/movie?api_key=" + TMDB_KEY 
        + "&language=en-US&include_adult=false&query=" + key 
        + '&page=' + currentPage;
      const response = await axios(url);
      setData(response.data);
      setLoaded(true);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setLoaded(false);
    fetchSearchResults(key, currentPage);
  }, [key, currentPage])

  //{loaded ? <Movies data={data} />  : <Loader />}
  return (
    <div>
      {loaded ? <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={data.total_pages} /> : null}
      <div className="moviesContainer">
        {loaded ? data.results.map( movie => 
          <Card movie={movie} key={movie.id} />
        ) : <div className="moviesContainer">{skeletons}</div>}
      </div>
      {loaded ? <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={data.total_pages} /> : null}
    </div> 
  );
}