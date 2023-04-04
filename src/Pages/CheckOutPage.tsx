import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'

const CheckOutPage = () => {
  const cart=useSelector((state:RootState)=>state.cart.cart)
  const [users,setusers]=useState<any>([])
useEffect(()=>{
setusers(cart)
},[])
  return (
    <div>
      <Navbar/>
      <Products products={users} cartpage={true}/>
      <h2 className='text-center'>total-{users.reduce((acc:any,it:any)=>acc+it.price,0)}</h2>

      <Footer/>
    </div>
  )
}

export default CheckOutPage
