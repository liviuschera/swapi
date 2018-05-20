import React from "react";
import Card from "./Card";

const CardList = props => {
   return (
      <div>
         {props.info.map(item => {
            return (
               <Card
                  key={`${item.name}${item.diameter}`}
                  name={item.name}
                  climate={item.climate}
                  diameter={item.diameter}
                  gravity={item.gravity}
                  terrain={item.terrain}
               />
            );
         })}
      </div>
   );
};

export default CardList;
