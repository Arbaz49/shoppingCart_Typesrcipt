import React from 'react'
interface props{
  products:[],
  cartpage?:boolean

}
const Products= ({products,cartpage}:props) => {
  console.log(products);
  return (
    <section className="text-gray-600 body-font">
      <h1 className='text-center text-black'>Products</h1>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {/* isme map karenge */}

        {
          products.map((product:any)=>{
            return(
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href="/" className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product?.image}/>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                <p className="mt-1">${product.price}</p>
                {
                  cartpage ?(<button className='bg-slate-900 text-slate-100 hover:bg-black p-2 rounded'>remove</button>):( <button className='bg-slate-900 text-slate-100 hover:bg-black p-2 rounded'>Add to Cart</button>)
                }
               
              </div>
            </div>
            )
          })
        }
       
      </div>
    </div>
  </section>
  )
}

export default Products
