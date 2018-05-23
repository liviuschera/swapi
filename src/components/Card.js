import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
   border-radius: 10px;
   background-color: #0df;
   display: inline-block;
   margin: 1rem;
   padding: 1rem;
   box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
`;

const Card = ({ name, climate, terrain, gravity, diameter }) => {
   return (
      <StyledWrapper>
         <h3>{name}</h3>
         <p>Climate: {climate}</p>
         <p>Terrain: {terrain}</p>
         <p>Gravity: {gravity}</p>
         <p>Diameter: {diameter}</p>
      </StyledWrapper>
   );
};

export default Card;
