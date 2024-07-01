import Link from 'next/link'
import React from 'react'

function ProductList(props:any) {
    const products = props.data;
    
  return (
    <div className='d-flex flex-wrap justify-content-start gap-4 mt-5 mb-5'>
        
            
        <Link href={'/Products/'+products.id} style={{textDecoration:'none'}}>
                         
                         <div className="card text-center pb-4" style={{width:240}}>
                             <img src={products?.image?.url} className="card-img-top mt-2" alt="card image" height={200}/>
                             <div className="card-body">
                               <h5 className="card-title fw-bold lead">{products?.name}</h5>
                                <p className="card-text fw-bold">${products?.price?.formatted}</p>
                               <button className='btn btn-success' >BUY NOW</button>
                                
                             </div>
                           </div>
                                 </Link>
                             
                       
                     
                 </div>
                
               )
             }
export default ProductList