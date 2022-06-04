import { Component } from "react";
import { mapper } from "./utils/mapper";
import movies from "./data/data.json";
import "./App.css";
import Button from "./components/Button/Button.jsx";
import FilmsGallery from "./components/FilmsGallery/FilmsGallery.jsx";

class App extends Component {
  state = {
    movies: mapper(movies),
    isShown: false,
  };

  onToggleMovies = () => {
    this.setState((prevState) => {
      return {
        isShown: !prevState.isShown,
      };
    });
  };

  onToggleWatched = (id) => {
    this.setState((prevState) => ({
      movies: prevState.movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, isWatched: !movie.isWatched };
        }
        return movie;
      }),
    }));
  };

  render() {
    const { movies, isShown } = this.state;
    return (
      <div>
        <Button onToggle={this.onToggleMovies} isShown={isShown} />
        {isShown && (
          <FilmsGallery
            movies={movies}
            onToggleWatched={this.onToggleWatched}
          ></FilmsGallery>
        )}
      </div>
    );
  }
}

export default App;
