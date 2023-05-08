import styled from 'styled-components';
const HeaderStyle = styled.div`
  body{
      min-height: 100vh;
  }
  a{
    text-decoration:none;
  }
  header{
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  header div:first-child{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  img{
      height: 45px;
      width: 48px;
      margin-right: 15px;
      margin-bottom: 10px;
  }
  header p{
      font-weight: bold;
      font-size: 25px;
      display: inline;
      margin-right: 10px;
      color: #fe8a00;
  }
  span{
      color: #f72964;
  }

  
`;
export default HeaderStyle;
