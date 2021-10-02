import React from 'react'
import {Route} from "react-router-dom";

//import layout
import MovieLayout from '../layouts/Movie.layout';


 const MovieHOC = ({component:Component , ...rest}) => {
    return (
        <>
            <Route {...rest} component = { 
           (props) => 
      //here i am rendering my HOC with default layout (component is HOC)
    <MovieLayout>
      <Component {...props}/>
    </MovieLayout>
    }/>
        </>
    );
};

export default MovieHOC;
