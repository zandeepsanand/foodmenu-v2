import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import FoodItemList from "./FoodItemList";

export default function FoodItemsSmall(props) {
 
  const foods = props.foods;

  return (
    <>
   
     <div>
      { props.categories ? props.categories.map( (cat,index) => { 

     return(
      <div>
      <Card.Title className="heading-color">{cat.catnameeng}</Card.Title> 
      {/* <FoodItemList  food={food}/> */}
      {props.foods.filter(food => food.category_id === cat.id).map(food_items => (
       <div>
          {/* {filteredPerson.name} */}
          <FoodItemList  food={food_items}/>
       </div>
      ))}

      </div>
      )

     
      
      }) :"" 

      }
     </div>
    </>
  );
}
