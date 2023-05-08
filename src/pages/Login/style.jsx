import styled from 'styled-components';
const LoginStyle = styled.div`    
    .login-form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #f9f9f9;
        height: 600px;
    }
    .title{
        text-align: center;
    }
    .title p{
        color: #707b81;
        margin: 10px 0;
    }
    .login-form label, .login-form span{
      font-weight: bold;
        font-size: 16px;
    }
    .form p{
        margin-bottom: 40px;
    }
    .form input[type=email],input[type=password]{
        display: block;
        width: 100%;
        padding: 10px;
        border: none;
        outline: none;
        background: none;
        border-bottom: 1px solid #f89300;
    }
    .form{
        margin-top: 20px;
        width: 50%;
    }
    .form .btn{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form input{
        margin: 15px 0;
    }

    .checkbox {
        appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid #f89300;
        border-radius: 5px;
        background-color: transparent;
        display: inline-block;
        position: relative;
        margin-right: 10px;
        cursor: pointer;
    }

    .checkbox:before {
        content: "";
        background-color: #f89300;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        width: 10px;
        height: 10px;
        border-radius: 3px;
        transition: all 0.3s ease-in-out;
    }

    .checkbox:checked:before {
        transform: translate(-50%, -50%) scale(1);
    }

    .checkbox-label {
        font-size: 18px;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
    }
    .checkbox-label span{
        margin-left: 10px;
    }
    .login-form button{
        margin-top: 50px;
    }
    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 9px 12px;
        gap: 8px;
        height: 61px;
        width: 460px;
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
export default LoginStyle;

