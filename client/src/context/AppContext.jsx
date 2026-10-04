import { useAuth, useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { assets } from "../assets/assets";

// =========================
// AXIOS BASE URL
// =========================
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// =========================
// CONTEXT
// =========================
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURRENCY || "₵";

    const { user } = useUser();
    const { getToken } = useAuth();

    // =========================
    // STATE
    // =========================
    const [isOwner, setIsOwner] = useState(null); // ✅ IMPORTANT FIX
    const [loadingUser, setLoadingUser] = useState(true);

    const [showHotelReg, setShowHotelReg] = useState(false);
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
    // FETCH USER
    // =========================
    const fetchUser = async () => {
        try {
            setLoadingUser(true);

            const token = await getToken();

            if (!token) {
                setIsOwner(false);
                setLoadingUser(false);
                return;
            }

            const { data } = await axios.get("/api/user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (data.success) {
                setIsOwner(data.role === "hotelOwner");
                setSearchedCities(data.recentSearchedCities || []);
            } else {
                setIsOwner(false);
                toast.error(data.message || "Failed to load user");
            }

        } catch (error) {
            setIsOwner(false);
            toast.error(error.message || "User fetch error");
        } finally {
            setLoadingUser(false);
        }
    };

    // =========================
    // FETCH ROOMS
    // =========================
    const fetchRooms = async () => {
        try {
            const { data } = await axios.get("/api/room1");

            if (data.success) {
                setRooms(data.rooms);
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error(error.message);
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
            setLoadingUser(false);
        }
    }, [user]);

    useEffect(() => {
        fetchRooms();
    }, []);

    // =========================
    // CONTEXT VALUE
    // =========================
    const value = {
        // config
        currency,

        // auth
        user,
        getToken,
        isOwner,
        loadingUser,

        // state
        showHotelReg,
        setShowHotelReg,

        rooms,
        setRooms,

        searchedCities,
        setSearchedCities,

        facilityIcons,

        axios
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// =========================
// HOOK
// =========================
export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }

    return context;
};