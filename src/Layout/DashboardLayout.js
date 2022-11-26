import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side border border-slate-700">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-900 text-base-content ">
            {user?.role === "buyer" && (
              <li>
                <Link to="/dashboard">My Bookings</Link>
              </li>
            )}
            {user?.role === "seller" && (
              <>
                <li>
                  <Link to="/dashboard">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard">My Products</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/sellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/">Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default DashboardLayout;
