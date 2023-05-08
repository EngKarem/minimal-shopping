import styled from 'styled-components';
const ProductStyle = styled.div`
  
  .products{  
     display:flex;
     justify-content: center;
     align-items: center;     
     padding:20px;
     flex-wrap:wrap;
  }
  .product{
    color:#8c8c8c;
    margin-right:50px;
    margin-bottom:10px;
    font-size:10px;
    height:397px;
    width:21%;
  }
  .product-name{
    color:#000;
    margin:15px 0;
    font-size:11px;
    font-weight:bold;
    display:flex;
    justify-content: space-between;
    align-items: center;  
  }
  .product img{
     cursor:pointer;     
     width:320px;
     height:320px;
     border-radius:10px;
  }
`;

export default ProductStyle;

