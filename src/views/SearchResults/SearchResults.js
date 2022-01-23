import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { GetSearchResults } from "../../api/GetSearchResults";
import Card from "../../components/Movie/Card";
import Pagination from "../../components/Pagination/Pagination";

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
    let SearchResults = await GetSearchResults(key, currentPage);
    setData(SearchResults);
    setLoaded(true);
 
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