import React from "react";
import { Link } from "react-router-dom";
import useVerified from "../../hooks/useVerified";

const Product = ({ product, setProduct }) => {
  const {
    img,
    name,
    post_time,
    seller,
    resalePrice,
    orgPrice,
    location,
    used,
    seller_email,
  } = product;

  const [isVerified] = useVerified(seller_email);
  return (
    <div>
      <div className="overflow-hidden rounded-lg shadow-2xl bg-gray-800 w-11/12 mx-auto">
        <div>
          <img
            className="object-fit w-full bg-gradient-to-r from-slate-500 to-slate-900"
            src={img}
            alt="product"
          />
        </div>

        <div className="p-6">
          <div>
            <p className="mt-2 text-2xl flex font-semibold items-center transition-colors duration-300 transform text-white">
              {name}
            </p>
            <span className="text-xs font-medium text-blue-600  dark:text-blue-400">
              Resale Price: ${resalePrice} | Original Price: ${orgPrice}
            </span>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              This product is used for: {used}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex flex-col justify-center flex-wrap">
              <div className="flex">
                <Link
                  className="m-1 font-semibold text-gray-700 dark:text-gray-200"
                  role="link"
                >
                  {seller}
                </Link>
                {isVerified && (
                  <p className="btn btn-xs rounded-full py-1 btn-info text-white mr-3">
                    ✓
                  </p>
                )}
              </div>
              <div className="flex flex-wrap">
                <span className="mx-1 py-1 text-xs text-gray-600 dark:text-gray-300">
                  Posted at: {post_time}
                </span>
                <span className="mx-1 py-1 text-xs text-gray-600 dark:text-gray-300">
                  Location: {location}
                </span>
              </div>
            </div>
          </div>
          <div className="my-3">
            <label
              className="btn btn-info btn-md w-full rounded-sm"
              htmlFor="booking-modal"
              onClick={() => setProduct(product)}
            >
              Buy Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
