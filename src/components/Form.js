import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import Restaurant from './Restaurant';



const Form = () =>{
    const APP_ID = '2212ac86';
    const APP_KEY = 'c15684e291aa4073912e4c99dec07227';
  
      const [restaurants,setRestaurants] = useState([]);
      const [recipes,setRecepes] = useState([]);
      const [search, setSearch] = useState("");
      const [query, setQuery] = useState('');
      const [diet, setDiet] = useState("");
      const [calories, setCalories] = useState("");
      const [mealtype, setmealtype] = useState("");
      const [health, sethealth] = useState("");
      const [cuisine, setcuisine] = useState("");
      const [excluded, setexcluded] = useState("");
      const [rest1, setrest1] = useState("");
      const [rest2, setrest2] = useState("");
      const [rest3, setrest3] = useState("");

      var lat = 0;
      var long = 0;

      function showPosition(position) {
        lat =  position.coords.latitude;
        long = position.coords.longitude;
      }

      navigator.geolocation.getCurrentPosition(showPosition);
    
      


    

      const StyleObject = {
        
        "height" : "50px",
        "width" : "150px"
        
  }
  
      useEffect(() => {
         getRecipie();
      },[query]);
  
      const getRecipie = async () => {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=5&calories=0-${calories}&meal=${mealtype}&cuisine=${cuisine}&Health=${health}-free&Diet=${diet}&excluded=${excluded}`
          
          );
        const data  = await response.json();
        console.log(data);
        setRecepes(data.hits)
      }



      const restClicked = async () => {
        const restd = await fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=11298&entity_type=city&q=${query}&lat=${lat}&lon=${long}`, {
          headers: {
            Accept: "application/json",
            "User-Key": "d45ea1866082729c2bc792dc2a1b4fe3"
          }
        });
      const restdata  = await restd.json();
      console.log(restdata);
      setRestaurants(restdata.restaurants)
   

 
 

      }
      //

    //
  
      const updateSearch = e =>{
        setSearch(e.target.value)
      }
  
      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
       
      }

     
  
  

 
    return (<div>
  
  <form onSubmit={getSearch} className="search-form">

  

<div className="form-group">
  <label htmlFor="q">What is your favorite food: *</label>
  <input type="text" className="form-control" id="q"  value={search} onChange={updateSearch} placeholder="Enter text" name="q"  />
</div>

<div className="form-group">
  <label htmlFor="diet">What diet do you need:</label>
  <input type="text" className="form-control" id="diet" placeholder="Enter text"  name="diet"  value={diet} name="diet"
          onChange={e => setDiet(e.target.value)} 
 />
</div>

<div className="form-group">
  <label htmlFor="health">Do you want food to be free of something:</label>
  <input type="text" className="form-control" id="health" placeholder="Enter text" name="health"
  onChange={e => sethealth(e.target.value)}  value={health}
/>
</div>


<div className="form-group">
  <label htmlFor="mealType">What is the meal type:</label>
  <input type="text" className="form-control" id="mealtype" placeholder="Enter text" name="mealtype"  value={mealtype}
  onChange={e => setmealtype(e.target.value)}  
/>
</div>

<div className="form-group">
  <label htmlFor="cuisineType">Any particular cuisine type:</label>
  <input type="text" className="form-control" id="cuisineType" placeholder="Enter text" name="cuisineType"
   onChange={e => setcuisine(e.target.value)}  value={cuisine}
/>
</div>

<div className="form-group">
  <label htmlFor="excluded">Do you want to exclude any food:</label>
  <input type="text" className="form-control" id="excluded" placeholder="Enter text" name="excluded"
    onChange={e => setexcluded(e.target.value)}  value={excluded}
  />
</div>

<div className="form-group">
  <label htmlFor="calories">Max clories intake:</label>
  <input type="number" className="form-control" id="calories" placeholder="Enter number" name="calories"
  onChange={e => setCalories(e.target.value)}  value={calories}
/>
</div>

<div className="text-center" >
<button className="btn" type="submit">Submit</button>
</div>
</form>




{recipes.map(recipe =>  (


<Recipe 
key={recipe.recipe.label} 
 title={recipe.recipe.label} 
 calories={recipe.recipe.calories} 
 image={recipe.recipe.image}
 ingredients={recipe.recipe.ingredients}
 source={recipe.recipe.source}
 yields={recipe.recipe.yield}
 totalWeight={recipe.recipe.totalWeight}
 totalNutrients={recipe.recipe.totalNutrients}
 totalDaily={recipe.recipe.totalDaily}
 dietLabels={recipe.recipe.dietLabels}
 healthLabels={recipe.recipe.healthLabels}
 
 />

)

)};

< button onClick={restClicked} value="Restaurents" className="btn"  style={StyleObject}>Restaurents</ button>

{restaurants.map(restaurant =>  (

  


<Restaurant 

 key={restaurant.restaurant.name} 
 title={restaurant.restaurant.name} 
 hlink = {restaurant.restaurant.menu_url}
 phno = {restaurant.restaurant.phone_numbers} 
 rating = {restaurant.restaurant.user_rating.aggregate_rating}
 cuisines = {restaurant.restaurant.cuisines}
 address = {restaurant.restaurant.location.address}
 locality_verbose = {restaurant.restaurant.location.locality_verbose}
 
 
 />

)

)};










    </div>);



}



export default Form;