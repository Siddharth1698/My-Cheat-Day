import React from 'react';
import './Recipe.css';
import ButtonComponent from './ButtonComponent';

const Recipe =({title,calories,image, ingredients}) => {

    

    return (
    <div className="eachRecipe">
        <h1>{title}</h1>
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}

        </ol>
    <p>{calories}</p>
    <img src={image} />


    </div>
        
        
        
        );
       
}

export default Recipe;