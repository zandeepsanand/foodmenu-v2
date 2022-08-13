import React from "react";
import { Link } from "react-router-dom";
import "../styles/order.css";
import { CartProvider, useCart } from 'react-use-cart';

export default function OrderScreen() {
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  return (
    <>
    <CartProvider>
      <div className="container2">
        <h5 class="font-color p-3 text-center">My Orders</h5>
        <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
          <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body height">
              <div className="row">
              {items.map((item) => (
                <>
                <div className="col-6 ">
                  <div className="order-font text-start ">{item.name}</div>
                </div>
                
                <div className="col-6 ">
                  <div className="p-1 prize-label1 button-colors p-1 ">
                  {item.quantity} x {item.price}<div className="currency p-1"> S.R</div>
                  </div>
                 
                </div>
                <div className="col-11 d-flex justify-content-center">
                  
                  
                  <button className="button-five m-2"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                 <i class="fa-solid fa-minus"></i>
                 
                
                </button>
                <div className="button-five m-2"> {item.quantity}</div>
                <button className="button-five m-2"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                 <i class="fa-solid fa-plus"></i>
                </button>
               
              
                </div>
                <div className="col-1 d-flex justify-content-end">
                <div className="button-five m-3" onClick={() => removeItem(item.id)}><i class="fa-regular fa-trash-can"></i></div>
                </div>
                </>
              ))}
              
              </div>
            </div>
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div className="d-flex justify-content-between p-3">
                    <div className="">Total</div>
                    <div className="">{cartTotal}</div>
                    
                  </div>
                  </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <form>
        <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1"  rows="3"></textarea>
  </div>
</form>
        
      </div>
      <Link to={"/delivery"}>
      <div className='footer1'>
      <div className=' fixed-bottom p-3'>
            <div  className='d-flex justify-content-center'>
            <div className='footer-color content-footer'> Next</div> 
            </div>
        </div>
      </div>
      </Link> 
      </CartProvider> 
    </>
  );
}
