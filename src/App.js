import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';


function App() {
  return (
      <BrowserRouter>
        <Link to="/checkout">Cart from React Router</Link><br/>
        <Link to="/">Home from React Router</Link><br/>
        <Routes>
          <Route path="/" element={<ProductsList/>}></Route>
          <Route path="/product" element={<ProductDetail/>}>
            <Route path=":id" element={<ProductDetail/>}></Route>
          </Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="*" element={<p>404</p>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
