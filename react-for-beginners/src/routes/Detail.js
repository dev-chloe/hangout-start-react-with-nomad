import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';

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
          <div className={styles.bg_img} style={{backgroundImage: `url(${movieDetail.background_image_original})`}}>
            <div className={styles.title}>
              <h3>{movieDetail.title} <i className={styles.year}>({movieDetail.year})</i></h3>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.top_box}> 
              <div className={styles.thum}>  
                <img src={movieDetail.medium_cover_image} alt={movieDetail.title} />
              </div>
              <div className={styles.info_box}>
                <p>{movieDetail.genres.map((g) => <span key={g} className={styles.gen}>{g} </span>)}</p>
                <p><span className={styles.bold}>{movieDetail.runtime}</span> mins</p>
                <p><span className={styles.red}>&#9733;</span> {movieDetail.rating}</p>
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