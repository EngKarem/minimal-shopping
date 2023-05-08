import Header from '../../components/header';
import LoginStyle from './style';
const Login = ()=> (
  <LoginStyle>
    <Header />
    <div style={{ padding:'20px' }}>
        <div className={'login-form'}>
          <div className={'title'}>
            <h2>Hello Again!</h2>
            <p>Welcome Back You've Been Missed!</p>
          </div>
          <div className={'form'}>
            <p>To login enter Your email address and password</p>
            <form>
              <label htmlFor={'email'}>Email Address</label>
              <input id={'email'} type={'email'} required />

              <label htmlFor={'Password'}>Password</label>
              <input id={'Password'} type={'Password'} required />

              <label className={"checkbox-label"}>
                <input className={"checkbox"} type={"checkbox"} />
                <span>Remember me</span>
              </label>
              <div className={'btn'}>
                <button className={"button"} type={'submit'}>
                  <span className={"lable"}>Login</span>
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  </LoginStyle>
)

export default Login
