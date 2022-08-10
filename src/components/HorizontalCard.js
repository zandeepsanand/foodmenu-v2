import React, { useEffect, useState } from "react";

// import axios from "../../Axios";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "../styles/horizontal.css";
// import "../../../styles/navigation.css";

export default function HorizontCards() {
  const [cards, setCard] = useState("");

  const fetchCardItem = async () => {
    const data = await fetch(`https://qrorder.aaasoftwaresolution.com/api/alldata`, { 
      method: 'get', 
      headers: new Headers({
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      })
    } );
    // console.log(data);

    const jsonData = await data.json();
    // setPizza(jsonData);

    setCard(jsonData.data);
  };

  useEffect(() => {
    fetchCardItem();
    // AOS.init();
    // AOS.refresh();
  }, []);

  return (
    <>
      <div class="row flex-nowrap overflow d-flex justify-content-center mb-5">
        {cards
          ? cards.map((card, index) => {
              return (
                <>
                  <div class="col-4 col-lg-2 col-sm-2 col-md-2">
                    <div className="card p-1 shadow rounded" >
                    <p class="card-text pt-2" >{card.cat_english}</p>
                    <a class="link" href="#list-item-1">
                 
                              <img  style={{ "width":"70px", "height":"70px" }} className="card-img-top horizontal-image mt-4" src={card.cat_image} alt="Card image cap" />
                    
                    </a>
                    </div>
                  </div>
                 
                </>
               );
            })
          : ""} 
      </div>
    </>
  );
}
