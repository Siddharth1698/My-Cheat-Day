import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            q: ''
        }
    }

    handleq = (event) =>{
        this.setState({
            q:event.target.value
        })
        console.log(event.target.value);

    }

    handleSubmit = (event) =>{
        event.preventDefault();
        alert(`${this.state.q}`)
    }

render(){
    return (<div>
  
  <form onSubmit={this.handleSubmit}>

<div class="form-group">
  <label for="q">What is your favorite food: *</label>
  <input type="text" class="form-control" id="q" placeholder="Enter text" 
  name="q" value={this.state.q}
  onChange={this.handleq} />
</div>

<div class="form-group">
  <label for="diet">What diet do you need:</label>
  <input type="text" class="form-control" id="diet" placeholder="Enter text" name="diet" value={this.state.diet}
  onChange={this.handlediet}/>
</div>

<div class="form-group">
  <label for="health">Do you want food to be free of something:</label>
  <input type="text" class="form-control" id="health" placeholder="Enter text" name="health" value={this.state.health}
  onChange={this.handlehealth}/>
</div>


<div class="form-group">
  <label for="mealType">What is the meal type:</label>
  <input type="text" class="form-control" id="mealType" placeholder="Enter text" name="mealType" value={this.state.mealType}
  onChange={this.handlemealType}/>
</div>

<div class="form-group">
  <label for="dishType">Any particular dish type:</label>
  <input type="text" class="form-control" id="dishType" placeholder="Enter text" name="dishType"/>
</div>

<div class="form-group">
  <label for="excluded">Do you want to exclude any food:</label>
  <input type="text" class="form-control" id="excluded" placeholder="Enter text" name="excluded"/>
</div>

<div class="form-group">
  <label for="calories">Max clories intake:</label>
  <input type="number" class="form-control" id="calories" placeholder="Enter number" name="calories"/>
</div>

<div  >
<button class="btn-dark" type="submit" class="btn btn-default">Submit</button>
</div>
</form>


    </div>);
}
}


export default Form;