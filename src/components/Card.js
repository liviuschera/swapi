import React from "react";

const Card = ({ name, climate, terrain, gravity, diameter }) => {
   return (
      <div className="bg-lightest-blue dib br3 pa3 ma2 grow shadow-5 ">
         <h3>{name}</h3>
         <p>Climate: {climate}</p>
         <p>Terrain: {terrain}</p>
         <p>Gravity: {gravity}</p>
         <p>Diameter: {diameter}</p>
      </div>
   );
};

export default Card;
