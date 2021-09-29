import {Route} from "react-router-dom";

//import HOC
import DefaultHOC from "./HOC/Default.HOC";

//Import Layout
import DefaultLayout from "./layouts/Default.layout";

//Pages
import HomePage from "./pages/Home.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return <>
     <DefaultHOC path = "/" exact component={HomePage}  />
  </>;
}

export default App;