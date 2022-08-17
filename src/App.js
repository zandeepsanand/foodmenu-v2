import './App.css';
import {
  Route,
  Link,
  Routes,
  useParams,
  BrowserRouter,
} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CartProvider, useCart } from "react-use-cart";
import Page from './components/Addtocart';
import Cart from './components/Cart';
import OrderScreen from './screens/OrderScreen';
import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function App() {

  const [categories, setCategories] = useState([]);
  const [foods, setFood] = useState([]);

  const fetchFoodCats = () => {
   axios.get(`https://qrorder.aaasoftwaresolution.com/api/category`)
    .then(res => {
   const category = res.data.data;
       setCategories(category);
      // console.log('axios console cat',categories);
    })
  }
  const fetchFoods = () => {
    axios.get(`https://qrorder.aaasoftwaresolution.com/api/all_items`)
     .then(res => {
    const category = res.data.data;
       setFood(category);
      //  console.log('axios console food',foods);
     })
   }
    useEffect(() => {
      fetchFoodCats();
      fetchFoods();
    }, []);

    useEffect(() => {
      // console.log(categories);
      // console.log(foods);
    }, [categories,foods]);
 
  return (
    <>
    <CartProvider>
     <Routes>
          <Route path="/" element={<HomeScreen useCart={useCart} categories = {categories} foods = {foods} />} />
          <Route path="/orders" element={<OrderScreen useCart={useCart} />} />
          {/* <Route path="/delivery" useCart={useCart} element={<Delivery/>}/> */}
        </Routes>
        
    </CartProvider>
    </>
  );

}
