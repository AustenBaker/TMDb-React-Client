import axios from "axios";
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;

export async function GetSearchResults(key, currentPage) {

  let response = await axios({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&include_adult=false&query=${key}&page=${currentPage}`,
    method: "GET",
  });

  if (response.status !== 200 && response.status !== 204) {
    console.log("error");
  }

  console.log("returning data", response.data.value);
  return response.data;
}