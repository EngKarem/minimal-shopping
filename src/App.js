import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products'
import Details from './pages/Product-Details'
import Login from './pages/Login'
import MainStyle from './main';
function App() {
  return (
    <BrowserRouter>
      <MainStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<Details />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
