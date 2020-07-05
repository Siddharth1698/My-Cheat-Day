import React from 'react';
import './Recipe.css';

import ButtonComponent from './ButtonComponent';

const Restaurant =({title,hlink,phno,rating,cuisines,address,locality_verbose}) => {

    

    return (
    <div className="eachRecipe">
        
      <a href={hlink} ><h3 >{title} </h3></a>  <br/>
    <p>Phone number: {phno}</p><br/>
      <p>Rating: {rating}</p><br/>
      <p>Cusines:{cuisines}</p><br/>
      <p>Address: {address}</p><br/>
      <p>Locality: {locality_verbose}</p><br/>
        


    </div>
        
        
        
        );
       
}

export default Restaurant;