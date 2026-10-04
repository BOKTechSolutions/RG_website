
import React, { useEffect } from "react";
import Navbar from "../../components/hotelOwner/Navbar";
import Sidebar from "../../components/hotelOwner/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {
  const { isOwner } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Only hotel owners can access the dashboard
    if (!isOwner) {
      navigate("/", { replace: true });
    }
  }, [isOwner, navigate]);

  // Don't render the dashboard while checking access
  if (!isOwner) {
    return null;
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Hotel Owner Navbar */}
      <Navbar />

      <div className="flex flex-1 min-h-0">
        {/* Hotel Owner Sidebar */}
        <Sidebar />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 pt-10 md:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
