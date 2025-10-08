import React from 'react';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router';
import ProductCard from '../Components/ProductCard';

const Products = () => {
    const {products}=useProducts()
    return (
        <div>
           
            <div className='flex justify-between items-center py-5'>
                <h1 className='text-3xl font-semibold'>All Products: {products.length}</h1>
                <Link className='btn btn-outline' to='/products'>Search</Link>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
             {
               products.map(product=>
               <ProductCard key={product.id} product={product}></ProductCard>
                )
            }
           </div>
        </div>
    );
};

export default Products;