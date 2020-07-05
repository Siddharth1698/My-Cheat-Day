import React from 'react';
import './Recipe.css';
import ButtonComponent from './ButtonComponent';

const Recipe =({title,calories,image,ingredients,source,yields,totalWeight,totalNutrients,totalDaily,dietLabels,healthLabels}) => {

    

    return (
    <div className="eachRecipe">
        <h1>{title}</h1>
        <b> Ingredients:</b>
        <ul> 
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}

        </ul>
    <p><b>Source Site:</b> {source}</p>
    <p><b>Number of Servings:</b> {yields}</p>
    <p><b>Calorie Count:</b> {calories} kcal</p>
    <p><b>Total Weight:</b> {totalWeight} g</p>
    


        

        <ul> <b>Diet Labels: </b>
            {dietLabels.map(dietLabel => (
                <li>{dietLabel}</li>
            ))}

        </ul>

        <ul> <b>Health Labels: </b>
            {healthLabels.map(healthLabel => (
                <li>{healthLabel}</li>
            ))}

        </ul>
    

    <img src={image} />


    </div>
        
        
        
        );
       
}

export default Recipe;