import axios from "axios";
const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;

export async function GetMovieDetails(id) {

  let response = await axios({
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_KEY}&append_to_response=credits`,
    method: "GET",
    headers: { Authorization: "Bearer " + TMDB_KEY }
  });

  if (response.status !== 200 && response.status !== 204) {
    console.log("error");
  }

  console.log("returning data", response.data.value);
  return response.data;
}