import styled from 'styled-components';
const DetailStyle = styled.div`
  .container{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f9f9f9;
        height: 600px;
        width:100%; 
    }
    .product{
      width:100%; 
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction:row;
    }
    img{
      height: 500px;
  
      margin-right: 50px;
    }
    .details{
    height: 500px; 
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      flex-direction:column;
    }
    .status{
      border-radius:5px;
      background-color:#eef0f2;
      padding:10px 40px 10px 10px;
    }
    .product-name{
      font-size:36px;
      font-weight:700;
      line-height:48px;
      color:#252c32;
    }
    .product-name p{

      margin-bottom:10px;
    }
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 12px;
        gap: 8px;
        height: 61px;
        width: 380px;
        border: none;
        background: #fff;
        border-radius: 32px;
        cursor: pointer;
    }

    .lable {
        font-weight: bold;
        line-height: 22px;
        font-size: 17px;
        color: #f72964;
        font-family: sans-serif;
        letter-spacing: 1px;
    }

    .button:hover {
        border: 2px solid #e52441;
    }
`;
export default DetailStyle;

