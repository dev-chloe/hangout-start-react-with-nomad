import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie(props) {
  return (
    <Link key={props.id} to={`/movie/${props.id}`} className={styles.movie_box}>
    {/* <Link key={props.id} to={`${process.env.PUBLIC_URL}/movie/${props.id}`}> */}
      <div className={styles.img_wrapper}>
        <img src={props.medium_cover_image} alt={props.title} />
      </div>
      <div>
        <h2 className={styles.title}>{props.title} <i className={styles.year}>({props.year})</i></h2>
        <ul className={styles.gen}>
          {props.genres.map(g => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{props.summary.length > 130 ? `${props.summary.slice(0, 130)}...` : props.summary}</p>
      </div>
      <div className={styles.bg}>
        <button className={styles.more}>More</button>
      </div>
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