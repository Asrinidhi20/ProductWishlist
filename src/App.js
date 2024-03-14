import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Wishlist from './WishList';

function App() {
  return (
    <Router>
      <div>
       
          <ul>
            <li>
              <Link to="/ProductList">ProductList</Link>
            </li>
            <li>
              <Link to="/Wishlist">WishList</Link>
            </li>
          </ul>
        

        <hr />
        <Routes>
        <Route exact path="/ProductList" element={<ProductList/>} />
        <Route exact path="/Wishlist" element={<Wishlist/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
