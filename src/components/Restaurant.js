import React from 'react';
import './Recipe.css';

import ButtonComponent from './ButtonComponent';

const Restaurant =({title,hlink,phno,rating,cuisines,address,locality_verbose}) => {

    

    return (
    <div className="eachRecipe">
        
      <a href={hlink} ><h3 >{title} </h3></a>  <br/>
    <p><b>Phone number:</b> {phno}</p><br/>
      <p><b>Rating:</b> {rating}</p><br/>
      <p><b>Cusines:</b> {cuisines}</p><br/>
      <p><b>Address: </b>{address}</p><br/>
      <p><b>Locality:</b> {locality_verbose}</p><br/>
        


    </div>
        
        
        
        );
       
}

export default Restaurant;