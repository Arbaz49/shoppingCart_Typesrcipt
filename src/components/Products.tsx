import React from 'react';
import {addToCart,removeFromCart} from "../store/slice"
import { useDispatch } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';

interface props{
  products:any,
  cartpage?:boolean

}
const Products= ({products,cartpage}:props) => {
  const dispatch=useDispatch();

  const  addProduct=(product:any)=>{
    dispatch(addToCart(product));
console.log(product)
toast.success("added successfully")

  }

  const  removeProduct=(id:number)=>{
    dispatch(removeFromCart(id));
toast.error("removed from cart successfully")

  }
  return (
    <>

    <section className="text-gray-600 body-font">
      <h1 className='text-center text-black'>Products</h1>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">

        {
          products.map((product:any)=>{
            return(
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href="/" className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product?.image}/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                <p className="mt-1">${product.price}</p>
                {
                  cartpage ?(<button onClick={()=>removeProduct(product.id)} className='bg-red-800 text-slate-100 hover:bg-black p-2 rounded'>remove</button>):( <button className='bg-slate-900 text-slate-100 hover:bg-black p-2 rounded' onClick={()=>addProduct(product)}>Add to Cart</button>)
                }
              </div>
            </div>
            )
          })
        }
       
      </div>
    </div>

  </section>
        </>
  )
}

export default Products
