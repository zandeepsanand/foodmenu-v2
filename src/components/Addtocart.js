import { CartProvider, useCart } from "react-use-cart";

export default function Page() {
  const { addItem } = useCart();

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
      {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

 


