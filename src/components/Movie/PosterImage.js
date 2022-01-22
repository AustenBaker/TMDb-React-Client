//import "./Poster.css";

export default function Poster(props) {
  return(
    <img 
      className="poster" 
      src={"https://image.tmdb.org/t/p/w342" + props.poster_path } 
      alt={props.title} 
      onError={e => {
        e.target.onerror = null; 
        e.currentTarget.src = "https://via.placeholder.com/342x513jpg/000000/FFFFFF/?text=POSTER+NOT+FOUND"; 
      }}
    />
  );
}