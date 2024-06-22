const Room = require('../models/roomModel');

exports.showRoom = async (req, res) => {

    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addRoom = async (req, res) => {

    const { roomType, roomId, status, checkIn, checkOut, adult, child } = req.body;

    try {
        const newRoom = new Room({
            roomId,
            roomType,
            adult,
            child, 
            status,
            checkIn,
            checkOut
        });

        await newRoom.save();
        res.status(201).json("new room created succesfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.editRoom = async (req, res) => {

    const { roomType, roomId, status, checkIn, checkOut, adult, child } = req.body;

    try {
        const newRoom = new Room({
            roomId,
            roomType,
            adult,
            child, 
            status,
            checkIn,
            checkOut
        });

        await newRoom.save();
        res.status(201).json("new room created succesfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRoom = async (req, res) => {

    const { roomType, roomId, status, checkIn, checkOut, adult, child } = req.body;

    try {
        const newRoom = new Room({
            roomId,
            roomType,
            adult,
            child, 
            status,
            checkIn,
            checkOut
        });

        await newRoom.save();
        res.status(201).json("new room created succesfully");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};