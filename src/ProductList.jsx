import React, { useState, useEffect } from 'react';
import './ProductList.css';

  const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data['products']);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>List of Products</h1>
      
      <ul>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

    const ProductItem = ({ product }) => {
    const [isWishlistSelected, setIsWishlistSelected] = useState(
    localStorage.getItem(`wishlist_${product.id}`) != null
  );

    const handleWishlistToggle = () => {
    const updatedValue = !isWishlistSelected;
    setIsWishlistSelected(updatedValue);
    if(localStorage.getItem(`wishlist_${product.id}`) == null) {
    localStorage.setItem(`wishlist_${product.id}`, JSON.stringify(product));
    }else{
    localStorage.removeItem(`wishlist_${product.id}`)
    }
  };
  return (
    <div className="product">
      <div className="wishlist-icon" onClick={handleWishlistToggle}>
        {isWishlistSelected ? '❤️' : '🤍'}
      </div>
      <h2 className="title">Product Name: {product.title}</h2>
      <p className="category">Description: {product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <p className="category">Discount: {product.discountPercentage}%</p>
      <p className="category">Rating: {product.rating}/5</p>
      <p className="category">Brand: {product.brand}</p>
      <p className="category">Category: {product.category}</p>
      <div className="image-container">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index}`} />
        ))}
  
      </div>
        
    </div>
  );

};
  

export default ProductList;
