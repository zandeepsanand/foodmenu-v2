import React from "react";
import { Link } from "react-router-dom";
import "../styles/order.css";

export default function OrderScreen() {
  return (
    <>
      <div className="container2">
        <h5 class="font-color p-3">My Orders</h5>
        <div className="order1 col-12 col-sm-12 col-lg-12 col-md-12">
          <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div class="card-body height">
              <div className="row">
                <div className="col-6 ">
                  <div className="order-font text-start ">sandeep</div>
                </div>
                <div className="col-6 ">
                  <div className="p-1 prize-label1 button-colors  ">
                    23 <div className="currency">S.R</div>
                  </div>
                 
                </div>
              
              </div>
            </div>
            <div class="card curve shadow p-0 mb-0 bg-white rounded ">
            <div className="d-flex justify-content-between p-3">
                    <div className="">hi</div>
                    <div className="">hi</div>
                    
                  </div>
                  </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <form>
        <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
    </>
  );
}
