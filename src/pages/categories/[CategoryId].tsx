import { ProductContext } from '@/Context/ProductContext';
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

 function Category(props:any) {

    console.log("category page",props)
    const route=useRouter();
    const {CategoryId}=route.query;
    console.log(CategoryId)


    const [categoriesName,setCategoriesName] = useState('');
    const [categoryData,setCategoryData] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const categoryData = await ProductContext.getProducts();
            setCategoryData(categoryData);
        }
        fetchProducts();
    },[]);
    useEffect(()=>{
      const fetchCategoryData = async () =>{
          const categoryName = await ProductContext.getCategory(CategoryId);
          setCategoriesName(categoryName);
      }
      fetchCategoryData();
  },[CategoryId]);


//store filtered products
const [filterCategoryProducts, setFilterCategoryProducts] = useState([]);

useEffect(() => {
    const filteredProducts = categoryData.filter((d:any) => {
        return d.category[0]?.slug === categoriesName;
    });
    setFilterCategoryProducts(filteredProducts)
}, [categoryData, categoriesName]);

  return (
    <>
    <div className='mt-4 mb-2 ps-5 fw-semibold fs-2 text-danger text-uppercase text-center'>{categoriesName}</div>
    <div className='d-flex flex-wrap justify-content-center gap-4  mb-5'>
    {
           filterCategoryProducts.map((fl:any)=>{
                return(
                    <Link href={'/Products/'+fl.id} style={{textDecoration:'none'}}>
                        <div className="prod-container d-flex flex-column justify-content-evenly mt-2">
                            <div className='text-center'><img src={fl.image.url} style={{height:'190px'}}/></div>
                            <div className='text-center'><h6 className='text-black'>{fl.name}</h6></div>
                            <div className='text-center'><span className="prod-des">{fl.description}</span></div>
                            <div className='text-center'><span className='fw-bold text-success fs-4'>₹{fl.price.formatted}</span> <del className='text-secondary fw-normal'>{fl.price.raw+1000}</del></div>
                            <div className='text-center'><span className='text-warning fw-semibold'>Deal of the day</span></div>
                            <div className='text-center'><span className='rounded-1 p-1 text-danger fw-bold'>Save 60%</span></div>
                        </div>
                    </Link>
                )
            })
        }
    </div>
    </>
  )
}

export default Category