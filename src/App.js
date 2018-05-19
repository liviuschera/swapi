import React, { Component } from "react";
import "./App.css";
import "tachyons";

class App extends Component {
   render() {
      return fetch("https://swapi.co/api/planets/1")
         .then(response => response.json())
         .then(data => console.log(data));
   }
}

// const App = () => {
//    const swapi = fetch("https://swapi.co/api/planets/1")
//       .then(response => response.json())
//       .then(data => console.log(data));
//    return swapi;
// };

export default App;
