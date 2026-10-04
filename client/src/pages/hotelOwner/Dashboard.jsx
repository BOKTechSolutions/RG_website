
import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import Title from "../../components/Title";
import { useAppContext } from "../../context/AppContext";

const Dashboard = () => {
  const {
    currency,
    user,
    getToken,
    toast,
    axios,
  } = useAppContext();

  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
    totalRooms: 0,
    availableRooms: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const token = await getToken();

      const { data } = await axios.get("/api/bookings/hotel", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setDashboardData({
          bookings: data.dashboardData?.bookings || [],
          totalBookings: data.dashboardData?.totalBookings || 0,
          totalRevenue: data.dashboardData?.totalRevenue || 0,
          totalRooms: data.dashboardData?.totalRooms || 0,
          availableRooms: data.dashboardData?.availableRooms || 0,
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Dashboard error:", error);

      toast.error(
        error.response?.data?.message ||
        error.message ||
        "Failed to load dashboard"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Manage Royal George Hotel, monitor rooms, track bookings, and view your revenue."
      />

      {/* Dashboard Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 my-8">

        {/* Total Rooms */}
        <div className="bg-primary/3 border border-primary/10 rounded-lg flex p-4">
          <div className="flex flex-col font-medium">
            <p className="text-blue-500 text-lg">
              Total Rooms
            </p>

            <p className="text-neutral-500 text-2xl font-semibold mt-1">
              {loading ? "..." : dashboardData.totalRooms}
            </p>
          </div>
        </div>

        {/* Available Rooms */}
        <div className="bg-primary/3 border border-primary/10 rounded-lg flex p-4">
          <div className="flex flex-col font-medium">
            <p className="text-green-500 text-lg">
              Available Rooms
            </p>

            <p className="text-neutral-500 text-2xl font-semibold mt-1">
              {loading ? "..." : dashboardData.availableRooms}
            </p>
          </div>
        </div>

        {/* Total Bookings */}
        <div className="bg-primary/3 border border-primary/10 rounded-lg flex p-4">
          <img
            className="max-sm:hidden h-10"
            src={assets.totalBookingIcon}
            alt=""
          />

          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">
              Total Bookings
            </p>

            <p className="text-neutral-500 text-2xl font-semibold mt-1">
              {loading ? "..." : dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-primary/3 border border-primary/10 rounded-lg flex p-4">
          <img
            className="max-sm:hidden h-10"
            src={assets.totalRevenueIcon}
            alt=""
          />

          <div className="flex flex-col sm:ml-4 font-medium">
            <p className="text-blue-500 text-lg">
              Total Revenue
            </p>

            <p className="text-neutral-500 text-2xl font-semibold mt-1">
              {currency}{" "}
              {loading
                ? "..."
                : Number(dashboardData.totalRevenue).toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Rooms Empty State */}
      {!loading && dashboardData.totalRooms === 0 && (
        <div className="border border-dashed border-gray-300 rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-semibold text-blue-950/80">
            No rooms have been added yet
          </h2>

          <p className="text-gray-500 mt-2 mb-5">
            Start by adding your first room to Royal George Hotel.
          </p>

          <a
            href="/hotel-owner/add-room"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            + Add Your First Room
          </a>
        </div>
      )}

      {/* Recent Bookings */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-5">
        Recent Bookings
      </h2>

      {dashboardData.bookings.length === 0 ? (
        <div className="w-full max-w-3xl border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-500">
            No bookings yet.
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Bookings will appear here once customers make reservations.
          </p>
        </div>
      ) : (
        <div className="w-full max-w-5xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-auto">
          <table className="w-full">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="py-3 px-4 text-gray-800 font-medium">
                  User Name
                </th>

                <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                  Room Name
                </th>

                <th className="py-3 px-4 text-gray-800 font-medium text-center">
                  Total Amount
                </th>

                <th className="py-3 px-4 text-gray-800 font-medium text-center">
                  Payment Status
                </th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {dashboardData.bookings.map((item, index) => (
                <tr key={item._id || index}>
                  <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                    {item.user?.username || "Guest"}
                  </td>

                  <td className="py-3 px-4 text-gray-400 border-t border-gray-300 max-sm:hidden">
                    {item.room?.roomType || "Room"}
                  </td>

                  <td className="py-3 px-4 text-gray-400 border-t border-gray-300 text-center">
                    {currency} {item.totalPrice || 0}
                  </td>

                  <td className="py-3 px-4 border-t border-gray-300">
                    <div className="flex">
                      <button
                        className={`py-1 px-3 text-xs rounded-full mx-auto ${
                          item.isPaid
                            ? "bg-green-200 text-green-600"
                            : "bg-amber-200 text-yellow-600"
                        }`}
                      >
                        {item.isPaid ? "Completed" : "Pending"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
