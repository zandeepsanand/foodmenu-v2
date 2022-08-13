import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";

import Modal from "react-bootstrap/Modal";
import "../styles/modalStyle.css";

export default function ModalCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addItem, inCart, setCartMetadata } = useCart();
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
   
    updateItemQuantity,
    removeItem,
    emptyCart,
    metadata
  } = useCart();
  


  
  
  const food = props.food;
  // {console.log(tests.name);}

     return( 
      
      <div className="d-flex justify-content-center">
      
        <div className="container4  ">
          <div className="col-12 col-sm-12 col-lg-12 col-md-12 p-3">
            <div className="card mt-4 shadow">
              <div className="back-button">
                <Modal.Header closeButton>
                  {/* <i class="fa-solid fa-arrow-left-long"  ></i> */}
                </Modal.Header>
              </div>

              <img
                class=" img-rounded modal-img "
               
                alt="Card image cap"
              />
       

              <div class="card-body p-0 overflow-auto scroll">
                
                <h5 class="modal-header justify-content-center font-modal text-center p-1 mt-2 mb-3">
               {food.name}
                </h5>

                <p class="card-text card-details1 text-left p-3 m-1">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <h5 class="modal-header1 justify-content-center font-modal text-center p-1 mt-3 mb-3 ">
                  Choose quantity
                </h5>
                <div className="d-flex justify-content-center">
              
              
                <div className="col-12 d-flex justify-content-center">
                  
                  
                  <button className="button-five m-2" key={food.id}
                  onClick={() => updateItemQuantity(food.id, food.quantity - 1)}
                >
                 <i class="fa-solid fa-minus"></i>
                 
                
                </button>
                <div className="button-five m-2"> {food.quantity}</div>
                <button className="button-five m-2" key={food.id}
                   onClick={() => updateItemQuantity(food.id, food.quantity + 1)}
                  
                >
                 <i class="fa-solid fa-plus"></i>
                </button>
               
              
                </div>
              
             
                </div>

                <h5 class="modal-header1 justify-content-center font-modal text-center p-1 mt-5 mb-3">
                  Addons
                </h5>
                <p class="card-text card-details1  justify-content-left p-1 m-1 ml-2">
                  Extra Meat
                </p>
                <p class="card-text card-details1  justify-content-left p-1 m-1 ml-2">
                  Extra Cheese
                </p>
                <h5 class="modal-header1 justify-content-center font-modal text-center p-1 mt-5 mb-3">
                  Custamization
                </h5>
                <p class="card-text card-details1 justify-content-left p-1 m-1">
                  Without cheese
                </p>
                <p class="card-text card-details1 justify-content-left p-1 m-1">
                  Without Tomato
                </p>
                <p class="card-text card-details1 justify-content-left p-1 m-1 mb-5">
                  Without Sauce
                </p>
                
               
                <div className="button-block justify-content-center p-3">
                  <div className="btn-block " typeof="button">
                    <div className="button-colors icon-btn elevation-0 icon-text-btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                      >
                      Add   
      
         ({(food.price)})
        
     
         <Modal.Header closeButton>
                  
                </Modal.Header>
                    
                    </div>
                  
       
   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     )
  ;
}
