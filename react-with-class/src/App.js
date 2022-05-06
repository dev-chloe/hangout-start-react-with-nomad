import React from "react";
import axios from "axios";
import Movie from "./Movies";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    this.setState({ movies, isLoading: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {
          isLoading ? "Loading..." : movies.map(movie => {
            return <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summay={movie.summay}
              poster={movie.poster}
            />
          })
        }
      </div>
    )
  }
}

export default App;
