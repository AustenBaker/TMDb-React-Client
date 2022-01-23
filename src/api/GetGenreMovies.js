import axios from "axios";
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;

export async function GetGenreMovies(id, currentPage) {

  let response = await axios({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&page=${currentPage}`,
    method: "GET",
  });

  if (response.status !== 200 && response.status !== 204) {
    console.log("error");
  }

  //console.log("returning data", response.data.value);
  return response.data;
}