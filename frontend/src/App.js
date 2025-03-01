import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Viewcart from './pages/Viewcart';
import OrderHistory from './pages/OrderHistory';
import Adminlogin from './pages/Adminlogin';
import Addproduct from './pages/Addproduct';
import Vieworders from './pages/Vieworders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path='men' element={<Men />}></Route>
          <Route path='women' element={<Women />}></Route>
          <Route path='kids' element={<Kids />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='viewcart' element={<Viewcart />}></Route>
          <Route path='ohistory' element={<OrderHistory />}></Route>
          <Route path='alogin' element={<Adminlogin />}></Route>
          <Route path='addproduct' element={<Addproduct />}></Route>
          <Route path='vieworders' element={<Vieworders />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
