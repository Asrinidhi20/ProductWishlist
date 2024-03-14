import React from 'react';
import './ProductList.css';

const Wishlist = () => {
  const wishlistItems = Object.keys(localStorage).filter(key => key.startsWith('wishlist_'));
  const wishlistProducts = wishlistItems.map(key => {
    const productId = key.replace('wishlist_', '');
    return { id: productId, ...JSON.parse(localStorage.getItem(key)) };
    
  });

  return (
    <div>
      <h1>Wishlist</h1>
      <div>
        {wishlistProducts.map(product => (
          <div key={product.id}>
            <div className="product">
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
                 )
                 )}
        
         </div>
        
         </div>
         </div>
        ))}
      </div>
    </div>
  );


};

export default Wishlist;
