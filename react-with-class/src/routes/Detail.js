import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

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
          <div className="bg_img" style={{backgroundImage: `url(${movieDetail.background_image_original})`}}>
            <div className="title">
              <h3>{movieDetail.title} <i className="year">({movieDetail.year})</i></h3>
            </div>
          </div>
          <div className="container">
            <div className="top_box"> 
              <div className="thum">  
                <img src={movieDetail.medium_cover_image} alt={movieDetail.title} />
              </div>
              <div className="info_box">
                <p>{movieDetail.genres.map((g) => <span key={g} className="gen">{g} </span>)}</p>
                <p><span className="bold">{movieDetail.runtime}</span> mins</p>
                <p><span className="red">&#9733;</span> {movieDetail.rating}</p>
              </div>  
            </div>  
            <p>{movieDetail.summary}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail;