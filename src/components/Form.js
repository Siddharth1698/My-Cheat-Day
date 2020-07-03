import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            q: '',
            diet:'',
            health:'',
            mealType:'',
            dishType:'',
            excluded:'',
            calories:null
        }
    }

    handleq = (event) =>{
        this.setState({
            q:event.target.value
        });
    }

    handlediet = (event) =>{
        this.setState({
            diet:event.target.value
        });
    }

    handlehealth = (event) =>{
        this.setState({
            health:event.target.value
        });
    }

    handlemealType = (event) =>{
        this.setState({
            mealType:event.target.value
        });
    }

    handledishType = (event) =>{
        this.setState({
            dishType:event.target.value
        });
    }

    handleexcluded = (event) =>{
        this.setState({
            excluded:event.target.value
        });
    }

    handlecalories = (event) =>{
        this.setState({
            calories:event.target.value
        });
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        alert(`${this.state.q}`)
    }

render(){
    return (<div>
  
  <form onSubmit={this.handleSubmit}>

<div className="form-group">
  <label htmlFor="q">What is your favorite food: *</label>
  <input type="text" className="form-control" id="q" placeholder="Enter text" name="q" value={this.state.q} onChange={this.handleq} />
</div>

<div className="form-group">
  <label htmlFor="diet">What diet do you need:</label>
  <input type="text" className="form-control" id="diet" placeholder="Enter text" name="diet" value={this.state.diet}
  onChange={this.handlediet}/>
</div>

<div className="form-group">
  <label htmlFor="health">Do you want food to be free of something:</label>
  <input type="text" className="form-control" id="health" placeholder="Enter text" name="health" value={this.state.health}
  onChange={this.handlehealth}/>
</div>


<div className="form-group">
  <label htmlFor="mealType">What is the meal type:</label>
  <input type="text" className="form-control" id="mealType" placeholder="Enter text" name="mealType" value={this.state.mealType}
  onChange={this.handlemealType}/>
</div>

<div className="form-group">
  <label htmlFor="dishType">Any particular dish type:</label>
  <input type="text" className="form-control" id="dishType" placeholder="Enter text" name="dishType"value={this.state.dishType}
  onChange={this.handledishType}/>
</div>

<div className="form-group">
  <label htmlFor="excluded">Do you want to exclude any food:</label>
  <input type="text" className="form-control" id="excluded" placeholder="Enter text" name="excluded"value={this.state.excluded}
  onChange={this.handleexcluded}/>
</div>

<div className="form-group">
  <label htmlFor="calories">Max clories intake:</label>
  <input type="number" className="form-control" id="calories" placeholder="Enter number" name="calories"value={this.state.calories}
  onChange={this.handlecalories}/>
</div>

<div  >
<button className="btn-dark" type="submit" className="btn btn-default">Submit</button>
</div>
</form>


    </div>);
}
}


export default Form;