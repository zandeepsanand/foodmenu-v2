
import React, { useEffect, useState } from "react";
import ModalCard from "./ModalCard";
import Modal from "react-bootstrap/Modal";
import { CartProvider, useCart } from "react-use-cart";

export default function FoodItemList(props) {
  


 
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem
  } = useCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const food = props.food;

  // console.log(food);
  return (
     <div class="col-sm-6 col-md-6 p-1" id="list-item-1">
      
        <div class="card curve shadow p-0 mb-0 bg-white rounded" onClick={handleShow} >
          <div class="card-body " >
            <div className="row" >
              <div className="col-3 ">
                <img className="card-image"  alt="pic" />
              </div>
              
              <div className="col-9 ">
                <div className="prize-label button-colors  ">{food.price}
                  <div className="currency">S.R</div>
                </div>

                <h5 class="card-title font-size card-heading text-left">
                  {food.name}
                </h5>
                
                <p class="card-details  p-0 m-0 text-left">
                  all white-meat chicken strips. which are breaded and
                  crispy-fried, then served with seasoned fries a...
                </p>
              </div>
            </div>
          </div>
        </div>
        <CartProvider>
        <Modal className="card shadow" show={show} onHide={handleClose} >
      <Modal.Body >
        <ModalCard food={food}/>
      </Modal.Body>
    </Modal>
    </CartProvider>
      </div>
    
      )

      
   
}
