import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import FoodItemList from "./FoodItemList";

export default function FoodItemsSmall() {
  const [foods, setFood] = useState([]);

  const fetchFoodItem = async () => {
    const data = await fetch(
      `http://qrorder.co.in/Jarjeer/public/api/alldata`,
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
  const products = [
    {
      id: 1,
      name: "Chicken Biriyani",
      price: 299,
      quantity: 1,
      image:"https://www.ruchiskitchen.com/wp-content/uploads/2015/05/Chicken-biryani-recipe-2-500x500.jpg"
    },
    {
      id: 2,
      name: "Shavarma",
      price: 299,
      quantity: 1,
      image:"https://www.ruchiskitchen.com/wp-content/uploads/2015/05/Chicken-biryani-recipe-2-500x500.jpg"
   },
    {
      id: 3,
      name: "Halwa",
      price: 199,
      quantity: 1,
      image:"https://www.ruchiskitchen.com/wp-content/uploads/2015/05/Chicken-biryani-recipe-2-500x500.jpg"
     },
  ];

  return (
    <div>
      <Card.Title className=" heading-color">Menu</Card.Title>

      <div class="row">
        {/* {foods ? foods.map(food=>{
          return (
            <FoodItemList food={food}/>
          )
        }) : ""} */}
        {products.map(food=>{
          return(
            <FoodItemList food={food}/>
          )
        })}
       
        {/* <div class="col-sm-6 p-1">
      <div class="card curve shadow p-0 mb-0 bg-white rounded">
        <div class="card-body ">
          <div className="row">
            <div className="col-3 ">
              <img className="card-image" src="images/1.jpg" alt="pic" />
            </div>
            <div className="col-9 ">
              <div className="prize-label button-colors  ">
                23 <div className="currency">S.R</div>
              </div>

              <h5 class="card-title font-size card-heading text-left">
                Crispy chicken slice
              </h5>
              <p class="card-details  p-0 m-0 text-left">
                all white-meat chicken strips. which are breaded and
                crispy-fried, then served with seasoned fries a...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 p-1">
      <div class="card curve shadow p-0 mb-0 bg-white rounded">
        <div class="card-body ">
          <div className="row">
            <div className="col-3 ">
              <img className="card-image p-0 m-0" src="images/1.jpg" alt="pic" />
            </div>
            <div className="col-9 ">
              <div className="prize-label button-colors  ">
                23 <div className="currency">S.R</div>
              </div>

              <h5 class="card-title font-size card-heading text-left">
                Crispy chicken slice
              </h5>
              <p class="card-details  p-0 m-0 text-left">
                all white-meat chicken strips. which are breaded and
                crispy-fried, then served with seasoned fries a...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 p-1">
      <div class="card curve shadow p-0 mb-0 bg-white rounded">
        <div class="card-body ">
          <div className="row">
            <div className="col-3 ">
              <img className="card-image" src="images/1.jpg" alt="pic" />
            </div>
            <div className="col-9 ">
              <div className="prize-label button-colors  ">
                23 <div className="currency">S.R</div>
              </div>

              <h5 class="card-title font-size card-heading text-left">
                Crispy chicken slice
              </h5>
              <p class="card-details  p-0 m-0 text-left">
                all white-meat chicken strips. which are breaded and
                crispy-fried, then served with seasoned fries a...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 p-1">
      <div class="card curve shadow p-0 mb-0 bg-white rounded">
        <div class="card-body ">
          <div className="row">
            <div className="col-3 ">
              <img className="card-image" src="images/1.jpg" alt="pic" />
            </div>
            <div className="col-9 ">
              <div className="prize-label button-colors  ">
                23 <div className="currency">S.R</div>
              </div>

              <h5 class="card-title font-size card-heading text-left">
                Crispy chicken slice
              </h5>
              <p class="card-details  p-0 m-0 text-left">
                all white-meat chicken strips. which are breaded and
                crispy-fried, then served with seasoned fries a...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 p-1">
      <div class="card curve shadow p-0 mb-0 bg-white rounded">
        <div class="card-body ">
          <div className="row">
            <div className="col-3 ">
              <img className="card-image" src="images/1.jpg" alt="pic" />
            </div>
            <div className="col-9 ">
              <div className="prize-label button-colors  ">
                23 <div className="currency">S.R</div>
              </div>

              <h5 class="card-title font-size card-heading text-left">
                Crispy chicken slice
              </h5>
              <p class="card-details  p-0 m-0 text-left">
                all white-meat chicken strips. which are breaded and
                crispy-fried, then served with seasoned fries a...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 p-1">
      <div class="card curve shadow p-0 mb-0 bg-white rounded">
        <div class="card-body ">
          <div className="row">
            <div className="col-3 ">
              <img className="card-image" src="images/1.jpg" alt="pic" />
            </div>
            <div className="col-9 ">
              <div className="prize-label button-colors  ">
                23 <div className="currency">S.R</div>
              </div>

              <h5 class="card-title font-size card-heading text-left">
                Crispy chicken slice
              </h5>
              <p class="card-details  p-0 m-0 text-left">
                all white-meat chicken strips. which are breaded and
                crispy-fried, then served with seasoned fries a...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6 p-1">
      <div class="card curve shadow p-0 mb-0 bg-white rounded">
        <div class="card-body ">
          <div className="row">
            <div className="col-3 ">
              <img className="card-image" src="images/1.jpg" alt="pic" />
            </div>
            <div className="col-9 ">
              <div className="prize-label button-colors  ">
                23 <div className="currency">S.R</div>
              </div>

              <h5 class="card-title font-size card-heading text-left">
                Crispy chicken slice
              </h5>
              <p class="card-details  p-0 m-0 text-left">
                all white-meat chicken strips. which are breaded and
                crispy-fried, then served with seasoned fries a...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  );
}
