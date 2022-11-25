import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    img,
    name,
    post_time,
    seller,
    resalePrice,
    orgPrice,
    location,
    used,
  } = product;
  return (
    <div>
      <div className="overflow-hidden rounded-lg shadow-md bg-gray-800 w-11/12 mx-auto">
        <img className="object-fit w-full" src={img} alt="product" />

        <div className="p-6">
          <div>
            <p className="mt-2 text-2xl flex font-semibold items-center transition-colors duration-300 transform text-white">
              {name}
            </p>
            <span className="text-xs font-medium text-blue-600  dark:text-blue-400">
              Resale: ${resalePrice} | Original Price: ${orgPrice}
            </span>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              This product is used for: {used}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center flex-wrap">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <Link
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  role="link"
                >
                  {seller}
                </Link>
              </div>
              <span className="mx-1 py-1 text-xs text-gray-600 dark:text-gray-300">
                {post_time}
              </span>
              <span className="mx-1 py-1 text-xs text-gray-600 dark:text-gray-300">
                {location}
              </span>
            </div>
          </div>
          <div className="my-3">
            <Link className="btn btn-info btn-md w-full rounded-sm">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
