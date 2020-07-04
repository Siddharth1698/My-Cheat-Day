import React from 'react';
import './Recipe.css';

import ButtonComponent from './ButtonComponent';

const Restaurant =({title,hlink,phno,rating,cuisines,address,locality_verbose}) => {

    

    return (
    <div className="eachRecipe">
        <p>Click on the Restaurent for menu</p> <br/> <br/>
      <a href={hlink} ><h3 >{title} </h3></a>  <br/>
    <p>{phno}</p><br/>
      <p>{rating}</p><br/>
      <p>{cuisines}</p><br/>
      <p>{address}</p><br/>
      <p>{locality_verbose}</p><br/>
        


    </div>
        
        
        
        );
       
}

export default Restaurant;