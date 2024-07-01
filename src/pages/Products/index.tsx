import React, { useEffect, useState } from 'react'
import { ProductContext } from '@/Context/ProductContext';
import ProductList from '@/Components/ProductList/ProductList'

  function Products() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const productData=await ProductContext.getProducts();
                setData(productData);
            }catch(error){
                console.error("error in products page",error);
            }
        };
        fetchData();
    },[]);

  return (
    <div>
       <div className='row'>
      <div className='col-1'>
        </div>
      <div className='col-11 d-flex flex-row flex-wrap m-3 gap-3'>
        {data.map((pd:any)=>(
              <ProductList key={pd.id} data={pd}/>
        )
          
    ) }
      </div>
    </div>
    </div>
  );
}

export default Products