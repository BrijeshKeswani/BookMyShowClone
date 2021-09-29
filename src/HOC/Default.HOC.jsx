import React from "react";
import {Route} from "react-router-dom";
//import layout
import DefaultLayout from "../layouts/Default.layout";



const DefaultHOC = ({component:Component , ...rest}) => {
    return(
        <>
      <Route {...rest} component = { 
           (props) => 
      //here i am rendering my HOC with default layout (component is HOC)
    <DefaultLayout>
      <Component {...props}/>
    </DefaultLayout>
    }/>
        </>
    );
};

export default DefaultHOC;