import React from 'react';
import './App.css';

class Car extends React.Component{  
  state = {
    brand: "ford",
    model: "mustange",
    color: "red",
    year: 2018,
      
  }
  changecolor = () =>{
     this.setState({color: "blue", brand: "honda"}); 
  }
   render(){
    return (
    <div>
      <h1 className="App" >My Car {this.state.brand}</h1>
      <h1>My Car {this.state.model}</h1>
      <h1>My Car {this.state.color}</h1>
      <button onClick={this.changecolor}>click me to change</button>
    </div>
    )
   }
}
export default Car; 