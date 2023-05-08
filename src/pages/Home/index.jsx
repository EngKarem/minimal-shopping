import Header from '../../components/header';
import HomeStyle from './style';
import ProductStyle from '../Products/style';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Home = ()=>{
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
    <HomeStyle>
      <Header />
      <main>
        <p>
          Get 50%  Off on
          Selected categories
        </p>
      </main>
      <div style={{ background:'#f9f9f9',padding:'40px 0' }}>
        <div style={{ textAlign:'center'}}>
          <h1>Products</h1>
        </div>
        <ProductStyle>
          <div className={'products'}>
            {products.slice(0,8).map((product) => (
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
        <div style={{ textAlign:'center'}}>
          <Link to="/products">See More</Link>
        </div>
      </div>
    </HomeStyle>
  );
}
export default Home;
