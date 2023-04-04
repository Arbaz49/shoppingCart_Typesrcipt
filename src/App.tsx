import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import CheckOutPage from './Pages/CheckOutPage';
import { ToastContainer } from 'react-toastify';
import Payment from './Pages/Payment';
function App() {
  const [users,setusers]=useState<[]>([])
  useEffect(()=>{
const getdata=async()=>{
  let {data}=await axios.get("https://fakestoreapi.com/products")
  setusers(data)
}
getdata();
  },[])
  return (
  <>
  {/* <Navbar/>
  <Products products={users} cartpage={false}/>
  <Footer/> */}
<ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="dark"
/>

  <BrowserRouter>
  <Routes>
  <Route  path='/' element={(<>
  <Navbar/>
  <Products products={users} cartpage={false}/>
  <Footer/></>)} />
  <Route  path='cart' element={<CheckOutPage/>} />
  <Route  path='payment' element={<Payment/>} />

    
  </Routes>
</BrowserRouter>
  </>
  );
}



export default App;
