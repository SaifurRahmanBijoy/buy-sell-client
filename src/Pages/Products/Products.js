import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const category = useLoaderData();
  const { name, products } = category;

  return (
    <div className="my-10">
      <h2 className="text-xl lg:text-3xl text-slate-300 text-center mb-6">
        Products in the category: {name}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
        {products.map((p, i) => (
          <Product key={i} product={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;

// orgPrice
