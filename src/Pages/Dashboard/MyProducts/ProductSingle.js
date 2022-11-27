import React from "react";

const ProductSingle = ({ product }) => {
  const { img, name, resalePrice, used, paid } = product;
  return (
    <div className="card bg-base-200 shadow-xl">
      <figure>
        <img className="bg-slate-700" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
          <p className="badge badge-secondary">{paid ? "Sold" : "Available"}</p>
        <p>Used for: {used}</p>
        <p>Price: ${resalePrice}</p>

        <div className="card-actions">
          <div className="btn btn-accent btn-outline rounded-sm btn-sm">
            Advertise
          </div>
          <div className="btn btn-error btn-outline rounded-sm btn-sm">
            delete
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
