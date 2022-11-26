import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/users/seller");
          const data = await res.json();
          return data;
        },
      });
    return (
        <div className="bg-slate-500 p-4 min-h-screen lg:p-10">
      <h2 className="text-2xl text-slate-200 mb-4 pl-2 uppercase">All Sellers</h2>
      <div className="overflow-x-auto text-sm">
        <table className="table w-full">
          <thead className="uppercase bg-slate-400">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name ? seller.name : "Unknown"}</td>
                <td>{seller.email}</td>

                <td>
                  <button className="btn rounded-sm btn-sm btn-error text-yellow-50">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllSellers;