import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets";

const GuestHouseStaffReg = () => {
  const { setShowHotelReg, axios, getToken } = useAppContext();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(
        "/api/staff",
        {
          name,
          contact,
        },
        {
          headers: {
            Authorization: `Bearer ${await getToken()}`,
          },
        },
      );

      if (data.success) {
        toast.success(data.message);
        setShowHotelReg(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div
      onClick={() => setShowHotelReg(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex bg-white rounded-xl max-w-3xl w-full mx-4"
      >
        <img
          src={assets.regImage}
          alt="registration"
          className="w-1/2 hidden md:block rounded-l-xl object-cover"
        />

        <div className="relative flex flex-col w-full md:w-1/2 p-8">
          <img
            src={assets.closeIcon}
            alt="close"
            className="absolute top-4 right-4 w-4 h-4 cursor-pointer"
            onClick={() => setShowHotelReg(false)}
          />

          <h2 className="text-2xl font-semibold text-center mt-6">
            Register Staff
          </h2>

          <p className="text-gray-500 text-sm text-center mt-2">
            Enter the staff details below.
          </p>

          {/* Staff Name */}
          <div className="mt-6">
            <label className="font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 mt-1 outline-indigo-500"
              required
            />
          </div>

          {/* Phone */}
          <div className="mt-4">
            <label className="font-medium text-gray-600">Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 mt-1 outline-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-lg py-2.5 mt-8"
          >
            Register Staff
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuestHouseStaffReg;
