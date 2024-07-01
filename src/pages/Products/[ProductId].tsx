"use client"
import AddToCart from '@/Components/addToCart/AddToCart';
import { ProductContext } from '@/Context/ProductContext';
import { ProductsDataType } from '@/Context/classes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {useEffect, useState } from 'react'

 function ProductDetail(props:any) {
    const route=useRouter();
    const {ProductId}=route.query;
    console.log("params",ProductId)
    const[productDet,setProductDet]=useState<ProductsDataType>();
    useEffect(()=>{
        const fetchProData=async()=>{
            try{
                const productDa=await ProductContext.getProductById(ProductId);
                setProductDet(productDa);
            }catch(error){
                console.error("error in products detail page",error);
            }
        };
        fetchProData();
    },[]);
    
    console.log("detailpage",productDet);

  return (
    <div>
        <div className='col-md-6 mt-3'>
                <img src={productDet?.image.url} alt={productDet?.name} height={400} width={300}/>
            </div>
            <div className='col-md-6 mt-4 p-4 mb-3'>
                
                <h1 className='display-5'>{productDet?.name}
                </h1>
                <h4 className='text-uppercase text-info'>
                    {productDet?.categories[0]?.slug}
                </h4>
                <h3 className='display-6 fw=bolder my-5'>${productDet?.price?.raw}</h3>
               <p className='lead'>{productDet?.description}</p>
               <AddToCart prodId={productDet?.id}/>
               <Link  href="/Cart" className="btn btn-outline-dark me-2 ">GO TO CART</Link>
               </div>
    </div>
  )
}
export default ProductDetail