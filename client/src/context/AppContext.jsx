import { useAuth, useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

// backend base URL
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY || "₵";
    const navigate = useNavigate();

    const { user } = useUser();
    const { getToken } = useAuth();

    const [isOwner, setIsOwner] = useState(false);
    const [showHotelReg, setShowHotelReg] = useState(false);

    // ✅ NOW STORES ROOM1 DATA
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
            const { data } = await axios.get(
                "/api/user",
                {
                    headers: {
                        Authorization: `Bearer ${await getToken()}`
                    }
                }
            );

            if (data.success) {
                setIsOwner(data.role === "hotelOwner");
                setSearchedCities(data.recentSearchedCities || []);
            } else {
                setTimeout(fetchUser, 2000);
            }

        } catch (error) {
            toast.error(error.message);
        }
    };

    // =========================
    // FETCH ROOM1 (UPDATED)
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

        user,
        getToken,

        isOwner,
        setIsOwner,

        axios,

        showHotelReg,
        setShowHotelReg,

        facilityIcons,

        rooms,
        setRooms,

        searchedCities,
        setSearchedCities
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// custom hook
export const useAppContext = () => useContext(AppContext);


