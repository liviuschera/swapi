import React from "react";
import styled from "styled-components";

const Input = styled.input`
   display: inline-block;
   padding: 0.6rem;
   border: 1px solid cadetblue;
   background: rgba(0, 222, 255, 0.2);
`;

const SearchBox = ({ searchField, searchChange }) => {
   return (
      <div className="pa2">
         <Input
            // className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="search info"
            onChange={searchChange}
         />
      </div>
   );
};

export default SearchBox;
