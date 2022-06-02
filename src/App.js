import { Component } from "react";
import { mapper } from "./utils/mapper";
import movies from "./data/data.json";
import "./App.css";

class App extends Component {
  state = {
    movies: mapper(movies),
  };

  render() {
    return <div></div>;
  }
}

export default App;
