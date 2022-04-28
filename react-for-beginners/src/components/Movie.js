import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(props) {
  return (
    <Link key={props.id} to={`/movie/${props.id}`}>
      <img src={props.medium_cover_image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.summary}</p>
      <ul>
        {props.genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </Link>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;