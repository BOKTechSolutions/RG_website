
import { useAuth, useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

// Backend base URL
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || "₵";

  const navigate = useNavigate();

  const { user } = useUser();
  const { getToken } = useAuth();

  const [isOwner, setIsOwner] = useState(false);

  const [showHotelReg, setShowHotelReg] = useState(false);

  // Rooms
  const [rooms, setRooms] = useState([]);

  const [searchedCities, setSearchedCities] = useState([]);

  // =========================
  // FACILITY ICONS
  // =========================

  const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
  };

  // =========================
  // FETCH CURRENT USER
  // =========================

  const fetchUser = async () => {
    try {
      const token = await getToken();

      if (!token) {
        return;
      }

      const { data } = await axios.get("/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        // The backend determines whether this user is a hotel owner
        setIsOwner(data.role === "hotelOwner");

        setSearchedCities(data.recentSearchedCities || []);
      } else {
        setIsOwner(false);
      }
    } catch (error) {
      console.error("FETCH USER ERROR:", error);

      // Don't show an error toast for every authentication refresh.
      setIsOwner(false);
    }
  };

  // =========================
  // FETCH ROOMS
  // =========================

  const fetchRooms = async () => {
    try {
      const { data } = await axios.get("/api/room1");

      if (data.success) {
        setRooms(data.rooms || []);
      } else {
        toast.error(data.message || "Failed to load rooms");
      }
    } catch (error) {
      console.error("FETCH ROOMS ERROR:", error);

      toast.error(
        error.response?.data?.message ||
        error.message ||
        "Failed to load rooms"
      );
    }
  };

  // =========================
  // EFFECTS
  // =========================

  useEffect(() => {
    if (user) {
      fetchUser();
    } else {
      setIsOwner(false);
    }
  }, [user]);

  useEffect(() => {
    fetchRooms();
  }, []);

  // =========================
  // CONTEXT VALUE
  // =========================

  const value = {
    currency,
    navigate,

    // Clerk
    user,
    getToken,

    // Hotel owner
    isOwner,
    setIsOwner,

    // Axios
    axios,

    // Hotel registration
    showHotelReg,
    setShowHotelReg,

    // Facilities
    facilityIcons,

    // Rooms
    rooms,
    setRooms,

    // Search
    searchedCities,
    setSearchedCities,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// =========================
// CUSTOM HOOK
// =========================

export const useAppContext = () => useContext(AppContext);

