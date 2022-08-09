import React from 'react'
import { useCart } from 'react-use-cart';


export default function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    
      if (isEmpty) return <p>Your cart is empty</p>;
    
      return (
        <>
          <h1>Cart ({totalUniqueItems})</h1>
    
          <ul>
            {items.map((item) => (
              <li key={item.id}>
               {item.quantity} {item.price} x {item.name} &mdash;
                <button
                  onClick={() => updateItemQuantity(item.id, ((item.quantity) - (item.price)))}
                >
                  {/* <i class="bi bi-person-badge"></i> */}
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, ((item.quantity ) + (item.price)  ))}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
        </>
      );
}
