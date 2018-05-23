import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import styled from "styled-components";
import "./App.css";

class App extends Component {
   constructor() {
      super();
      this.state = {
         data: [],
         searchField: ""
      };
   }

   componentDidMount() {
      fetch("https://swapi.co/api/planets")
         .then(response => response.json())
         .then(data => {
            console.log(data.results);
            this.setState({
               data: data.results
            });
         });
   }

   onSearchChange = event => {
      this.setState({ searchField: event.target.value });
   };

   render() {
      const RenderDiv = styled.div`
         text-align: center;
      `;
      const filteredResults = this.state.data.filter(item => {
         return item.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase());
      });
      return (
         <RenderDiv>
            <h1>swAPI</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <CardList info={filteredResults} />
         </RenderDiv>
      );
   }
}

export default App;
