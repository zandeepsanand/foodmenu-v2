import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";

import Modal from "react-bootstrap/Modal";
import "../styles/modalStyle.css";

export default function ModalCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const { addItem } = useCart();
  const products = [
    {
      id: 1,
      name: "Malm",
      price: 9900,
      quantity: 1
    },
    {
      id: 2,
      name: "Nordli",
      price: 16500,
      quantity: 5
    },
    {
      id: 3,
      name: "Kullen",
      price: 4500,
      quantity: 1
    },
  ];

  
  
  const food = props.food;
  return (
    
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
                src={food.cat_image}
                alt="Card image cap"
              />
       

              <div class="card-body p-0 overflow-auto scroll">
                <h5 class="modal-header justify-content-center font-modal text-center p-1 mt-2 mb-3">
                  {food.cat_english}
                </h5>

                <p class="card-text card-details1 text-left p-3 m-1">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <h5 class="modal-header1 justify-content-center font-modal text-center p-1 mt-3 mb-3 ">
                  Choose Amount
                </h5>
                <div className="d-flex justify-content-center">
                  <i class="fa-solid fa-minus m-1"></i>
                  <i class="fa-solid fa-1 m-1"></i>
                  {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}

                  <i class="fa-solid fa-plus m-1"></i>
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
                    <div className="button-colors icon-btn elevation-0 icon-text-btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default">
                      Add <h1>Cart ({totalUniqueItems})</h1>
                      <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.quantity} x {item.name} &mdash;
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
