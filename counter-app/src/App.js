import React from 'react';
import './App.scss';



const Header= () =>{
return (
  <header>
    <h1>Counter App</h1>
    
  </header>
)
};



const Footer = () =>{
  return (
    <footer>Ayman App &copy;</footer>
    
    
  )
};

class Main extends React.Component{
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
    
    let count = this.state.counter--
    this.setState({count})


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

     )
   }

};

class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
      );
  }
}
 
export default App ;





























// class App extends React.Component {
//   state = {
//     count:0
//   }
//   render () {
//     return (
//       <div id="span">
//         <span>{this.state.count}</span>
//         <button>count</button>
//       </div>
//     )
//   }

// }

// export default App;



