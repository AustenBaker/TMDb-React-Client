

export default function NumberRating(props) {

  let rating = props.rating;
  return(
    <p className={`numberRating 
        ${rating >= 7.7 && 'movie-rating-great'} 
        ${rating >= 6.8 && rating < 7.7 && 'movie-rating-positive'} 
        ${rating < 6.8 && rating >= 6 && 'movie-rating-average'}
        ${rating < 6 && 'movie-rating-poor'}
      `}
      >
        {rating * 10}
      </p>
  )
}