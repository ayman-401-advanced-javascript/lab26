import React from 'react';
import './App.scss';
import Counter from './Counter';



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



class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <React.Fragment>
        <Header />
        <Counter />
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



