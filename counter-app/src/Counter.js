/* eslint-disable react/no-direct-mutation-state */
import React from 'react';

class Counter extends React.Component{
    constructor(props){
      super(props)
  
      this.state   ={
        counter: 0,
        name : 'Go !',
        boolian : "Let's see if the numbers accept the divination by 2 or not"
        
      }
    }
  
     
     handleClickIncrement = e =>{
       e.preventDefault();
      
      let count = this.state.counter++
      let name = this.state.name;
      name = 'Keep Going !';
      let boolian = false;
      if( this.state.counter % 2 === 0){
        boolian = 'true';

      }else {
         boolian = " false"
      }
      this.setState({count , name , boolian})
      // this.setState({name})

     }
     handleClickDncrement = e =>{
      e.preventDefault();
      if(this.state.counter>0){
      let count = this.state.counter--
      let name = this.state.name;
      name = 'Youc cant go less that Zero'
      let boolian = false;
      if( this.state.counter % 2 === 0){
        boolian = 'true';

      }else {
         boolian = " false"
      }
      this.setState({count})
      this.setState({name})
      this.setState({boolian})


      }
      
  
  
  
    }
  
     render(){
       return (
         <section>
         <h3>{this.state.counter}</h3>
         <h3>{this.state.boolian}</h3>
         <h3>{this.state.name}</h3>


         <div className="both">
         <button className="bot1" onClick={this.handleClickIncrement}>Increment</button>
         <button className="bot2" onClick={this.handleClickDncrement}>Decrement</button>
         </div>
  
         </section>
  
       );
     }
  
  };

  export default Counter;
