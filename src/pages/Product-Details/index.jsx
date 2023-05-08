import Header from '../../components/header';
import DetailStyle from './style';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product_Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  // Fetch the data
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProduct(data);
      });
  }, []);
  return (
    <div>
      <Header />
      <DetailStyle>
        <div style={{ padding:'20px' }}>
          <div className={'container'}>
            {
              <div className={'product'}>
                <div>
                  <img src={product.thumbnail}  alt={'product'}/>
                </div>
                <div className={'details'}>
                  <span className={'status'}>New!</span>
                  <div className={'product-name'}>
                    <p>{product.title}</p>
                    <span>${product.price}</span>
                  </div>
                  <p style={{ color:'#919ba4' }}>Brand: {product.brand}</p>
                  <p>{product.description}</p>
                  <p>Stock & Availability: {product.stock}</p>
                  <button className={"button"} type={'submit'}>
                    <span className={"lable"}>Add to Cart</span>
                  </button>
                </div>
              </div>
            }
          </div>
        </div>
      </DetailStyle>
    </div>
  );
}
export default Product_Detail
