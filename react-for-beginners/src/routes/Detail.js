import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  }
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movieDetail.medium_cover_image} alt={movieDetail.title} />
            <h3>{movieDetail.title} <i>({movieDetail.year})</i></h3>
            <p>{movieDetail.summary}</p>
            <p>{movieDetail.genres.map((g) => <span key={g}>{g} </span>)}</p>
            <p>{movieDetail.runtime} mins</p>
            <p>&#9733; {movieDetail.rating}</p>
        </div>
      )}
    </div>
  )
}

export default Detail;