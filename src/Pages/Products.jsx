import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { products } = useProducts();

  //========search product==========//
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedProducts = term
    ? products.filter((product) =>
        product.name.toLocaleLowerCase().includes(term)
      )
    : products;

 //====================================//
console.log(searchedProducts)
  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h1 className="text-3xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-500">
            {/* ({products.length}) Products Found */}
            ({searchedProducts.length}) Products Found
          </span>
        </h1>

  {/* ==========search er jonno================ */}
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
   {/* =============================================      */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))} */}


            {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;

{
  /* <Link className='btn btn-outline' to='/products'>Search</Link> */
}
