/* eslint-disable react/no-direct-mutation-state */
import React from 'react';

class Counter extends React.Component{
    constructor(props){
      super(props)
  
      this.state   ={
        counter: 0
        
      }
    }
  
     handleClickIncrement = e =>{
       e.preventDefault();
       
      let count = this.state.counter++
      this.setState({count})
     }
     handleClickDncrement = e =>{
      e.preventDefault();
      if(this.state.counter>0){
      let count = this.state.counter--
      this.setState({count})
      }
      
  
  
  
    }
  
     render(){
       return (
         <section>
         <h3>{this.state.counter}</h3>
         <div className="both">
         <button className="bot1" onClick={this.handleClickIncrement}>Increment</button>
         <button className="bot2" onClick={this.handleClickDncrement}>Decrement</button>
         </div>
  
         </section>
  
       );
     }
  
  };

  export default Counter;
