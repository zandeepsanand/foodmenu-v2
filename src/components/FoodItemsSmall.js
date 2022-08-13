import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import FoodItemList from "./FoodItemList";

export default function FoodItemsSmall() {
  const [foods, setFood] = useState([]);

  const fetchFoodItem = async () => {
    const data = await fetch(
      `https://qrorder.aaasoftwaresolution.com/api/all_items`,
      {
        method: "get",
        headers: new Headers({
          "user-agent": "Mozilla/4.0 MDN Example",
          "content-type": "application/json",
        }),
      }
    );
    // console.log(data);

    const jsonData = await data.json();
    // setPizza(jsonData);

    setFood(jsonData.data);
  };
  useEffect(() => {
    fetchFoodItem();
    // AOS.init();
    // AOS.refresh();
  }, []);

  return (
    // <div>
    //   <Card.Title className=" heading-color">Menu</Card.Title>

    //   <div class="row">
    //     {foods ? foods.map(food=>{
    //       return (
    //         <FoodItemList food={food}/>
    //       )
    //     }) : ""}
       

    //   </div>
    // </div>
    <>
    <div>
    { foods ? foods.map(food=>{
      
      return(
        <div>
{food.category_name ? <Card.Title className="heading-color">{food.category_name}</Card.Title> :"" }
        
{food.category_name  ? <FoodItemList  food={food}/> :"" }
        </div>
      );
    
    }) : "" }
    
     </div>
    </>
  );
}
