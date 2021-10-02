import {Route} from "react-router-dom";

//import HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Import Layout
import DefaultLayout from "./layouts/Default.layout";
import MovieLayout from "./layouts/Movie.layout";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return <>
     <DefaultHOC path = "/" exact component={HomePage}  />
     <MovieHOC path = "/movie/:id" exact component={Movie}  />
  </>;
}

export default App;