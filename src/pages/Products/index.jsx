import Header from '../../components/header';
import ProductStyle from './style';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const Products = () => {
  const [products, setProducts] = useState([]);

  // Fetch the data
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      });
  }, []);

  // Render the products
  return (
    <div>
      <Header />
      <div style={{ background:'#f9f9f9' }}>
        <div style={{ textAlign:'center', color:'#3e3e3e', padding:'30px'}}>
          <h1>All Products</h1>
        </div>
        <ProductStyle>
          <div className={'products'}>
            {products.slice(0,12).map((product) => (
              <div className={'product'} key={product.id}>
                <Link  to={`/product-details/${product.id}`}><img src={product.thumbnail}  alt={'product'}/></Link>
                <div className={'product-name'}>
                  <p>{product.title}</p>
                  <span>{product.price}$</span>
                </div>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </ProductStyle>

      </div>
    </div>
  );
};

export default Products;

