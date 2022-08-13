import logo from './logo.svg';
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
import { CartProvider } from 'react-use-cart';
import Page from './components/Addtocart';
import Cart from './components/Cart';
import OrderScreen from './screens/OrderScreen';
import Example from './components/Example';

function App() {
  return (
    <>
    <CartProvider>
     <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/orders" element={<OrderScreen />} />
          {/* <Route path="/delivery" element={<Delivery/>}/> */}
        </Routes>
        
      <Page />
      <Cart />
      {/* <Example/> */}
      
    </CartProvider>
    </>
  );
}

export default App;
