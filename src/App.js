import React, { Component } from "react";
import "./App.css";
import "tachyons";

class App extends Component {
   constructor() {
      super();
      this.state = {
         planet: ""
      };
      // this.getVal = this.getVal.bind(this);
   }

   //
   //    getVal() {
   //       fetch("https://swapi.co/api/planets/1")
   //          .then(response => response.json())
   //          .then(data => {
   //             console.log(data.name);
   //             this.setState({
   //                planet: data.name
   //             });
   //          });
   //    }

   componentDidMount() {
      fetch("https://swapi.co/api/planets/1")
         .then(response => response.json())
         .then(data => {
            console.log(data.name);
            this.setState({
               planet: data.name
            });
         });
   }

   render() {
      return <div>Here we are: {this.state.planet}</div>;
   }
}

// const App = () => {
//    const swapi = fetch("https://swapi.co/api/planets/1")
//       .then(response => response.json())
//       .then(data => console.log(data));
//    return swapi;
// };

export default App;
