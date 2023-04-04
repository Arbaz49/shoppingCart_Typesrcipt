import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  const [users,setusers]=useState<[]>([])
  useEffect(()=>{
const getdata=async()=>{
  let {data}=await axios.get("https://fakestoreapi.com/products")
  setusers(data)
  console.log(data)
}
getdata();
  },[])
  return (
  <>
  <Navbar/>
  <Products products={users} cartpage={false}/>
  <Footer/>
  </>
  );
}

export default App;
