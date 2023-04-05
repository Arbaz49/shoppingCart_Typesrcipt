import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CheckOutPage = () => {
  const cart=useSelector((state:RootState)=>state.cart.cart)
  const [users,setusers]=useState<any>([])
useEffect(()=>{
setusers(cart)
},[cart])
  return (
    <div>
      <Navbar/>
      <Products products={users} cartpage={true}/>
      <div className='flex justify-center gap-3'>
      <h1 className='text-center text-3xl'>total-{users.reduce((acc:any,it:any)=>acc+it.price,0)}</h1>
        
<Link to={"/payment"} className='text-xl text-white bg-lime-700 rounded p-1'>Payment</Link>
      </div>
      <Footer/>
    </div>
  )
}

export default CheckOutPage
