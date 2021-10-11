import {Route} from "react-router-dom";
import axios from "axios";

//import HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Import Layout
import DefaultLayout from "./layouts/Default.layout";
import MovieLayout from "./layouts/Movie.layout";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3"; //i got this url from tmdb documentation web page in authentication section
axios.defaults.params={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return <>
     <DefaultHOC path = "/" exact component={HomePage}  />
     <MovieHOC path = "/movie/:id" exact component={Movie}  />
     <DefaultHOC path = "/plays" exact component={Plays}  />
     
  </>;
}

export default App;