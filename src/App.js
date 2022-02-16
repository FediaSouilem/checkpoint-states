import React, { Component } from 'react'
import image from "./photo.jpg"
import "./App.css"

export default class App extends Component {
  // constructor() {
  //   this.state= {
  //     name:"Fedia SOUILEM",
  //     bio:"",
  //     profession:''
  //   }

  // }
  state ={
    name:"Fedia SOUILEM",
    bio:"Research in food by using amazing nutritional properties of microalgae",
    profession:"Doctor in Biology",
    imgSrc:image,
    show: false,
    counter:0
    
  }
  componentDidMount() { 
    setInterval (()=>{
      this.setState({counter:this.state.counter+1});
    },1000); 
    
   }
  clickHandler = ()=>{
    this.setState({
        show: !this.state.show
    })
}

  render() {
    
    return (
      <div className='container'>
        <h1>{this.state.counter}</h1>
        <button className="button" onClick={this.clickHandler}>show</button>
      {this.state.show ?
        <><p> My name is {this.state.name} and i'm a {this.state.profession} <br></br> Bio: {this.state.bio} </p>
        <img src={image}/></> : null }  

        </div>
        );
        
    
  }
}

