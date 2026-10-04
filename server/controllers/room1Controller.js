import fs from "fs";
import Room from "../models/room.js";
import Room1 from "../models/room1.js";
import { v2 as cloudinary } from "cloudinary";



// ===============================
// ✅ CREATE ROOM1
// ===============================
export const createRoom1 = async (req, res) => {
    try {
        const { roomType, pricePerNight } = req.body;

        // 🔍 Validate input
        if (!roomType || !pricePerNight) {
            return res.status(400).json({
                success: false,
                message: "roomType and pricePerNight are required"
            });
        }

        // 🔍 Check if hotel exists for this owner
        const room = await Room.findOne({ owner: req.auth.userId });

        if (!room) {
            return res.status(404).json({
                success: false,
                message: "No hotel found for this owner"
            });
        }

        // 📤 Upload images to Cloudinary
        let images = [];

        if (req.files && req.files.length > 0) {
            const uploadPromises = req.files.map(async (file) => {
                const result = await cloudinary.uploader.upload(file.path);

                // 🧹 Delete temp file after upload
                fs.unlinkSync(file.path);

                return result.secure_url;
            });

            images = await Promise.all(uploadPromises);
        }

        // 🏨 Create room
        const newRoom = await Room1.create({
            room: room._id,
            roomType,
            pricePerNight: Number(pricePerNight),
            images,
            isAvailable: true
        });

        return res.status(201).json({
            success: true,
            message: "Room created successfully",
            room: newRoom
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



// ===============================
// ✅ GET ALL AVAILABLE ROOMS
// ===============================
export const getRoom1 = async (req, res) => {
    try {
        const rooms = await Room1.find({
            isAvailable: true
        });

        return res.status(200).json({
            success: true,
            count: rooms.length,
            rooms
        });

    } catch (error) {
        console.error("GET ROOM1 ERROR:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// ===============================
// ✅ GET ROOMS FOR LOGGED-IN OWNER
// ===============================
export const getOwnerRoom1 = async (req, res) => {
    try {
        const roomData = await Room.findOne({ owner: req.auth.userId });

        if (!roomData) {
            return res.status(404).json({
                success: false,
                message: "No hotel found"
            });
        }

        const room1 = await Room1.find({ room: roomData._id })
            .populate("room")
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: room1.length,
            rooms: room1
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



// ===============================
// ✅ TOGGLE ROOM AVAILABILITY
// ===============================
export const toggleRoom1Availability = async (req, res) => {
    try {
        const { room1Id } = req.body;

        if (!room1Id) {
            return res.status(400).json({
                success: false,
                message: "room1Id is required"
            });
        }

        const roomData = await Room1.findById(room1Id);

        if (!roomData) {
            return res.status(404).json({
                success: false,
                message: "Room not found"
            });
        }

        // 🔄 Toggle availability
        roomData.isAvailable = !roomData.isAvailable;

        await roomData.save();

        return res.status(200).json({
            success: true,
            message: "Room availability updated",
            isAvailable: roomData.isAvailable
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};



// ===============================
// ✅ DELETE ROOM (BONUS - OPTIONAL)
// ===============================
export const deleteRoom1 = async (req, res) => {
    try {
        const { room1Id } = req.params;

        const room = await Room1.findById(room1Id);

        if (!room) {
            return res.status(404).json({
                success: false,
                message: "Room not found"
            });
        }

        await Room1.findByIdAndDelete(room1Id);

        return res.status(200).json({
            success: true,
            message: "Room deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};