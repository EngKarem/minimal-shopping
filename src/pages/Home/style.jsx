import styled from 'styled-components';
import adImage from '../../imgs/ad.jpg';
const HomeStyle = styled.main`  
  main{
      width: 100%;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-image: url(${adImage});
      background-repeat: no-repeat;
  }
  main p{
      text-align: center;
      color: #fff;
      width: 400px;
      font-size: 40px;
      font-weight: 500;
      line-height: 50px;
      letter-spacing: 0;
  }
  a{
      cursor: pointer;     
      color: #f72964;
      text-decoration: none;
  }
`;
export default HomeStyle;
