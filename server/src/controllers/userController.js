const User = require('../models/userModel');
const Room = require('../models/roomModel');

exports.createUser = async (req, res) => {
    const { name, email, adult, child, mobile, rooms, checkIn, checkOut } = req.body;

    const availableRooms = await Room.find({
        status: "Available",
        checkIn: { $ne: checkIn },
        checkOut: { $ne: checkOut },
        roomType: { $in: rooms.map(room => room.type) },
    });

    if (availableRooms.length < rooms.length) {
        return res.status(400).json('rooms are not available.');
    }

    const user = new User({
        name,
        email,
        mobile,
        adult,
        child,
        rooms,
        checkIn,
        checkOut
    });

    try {
        rooms.forEach(async (room) => {
            const availableRoom = availableRooms.shift();
            availableRoom.status = email;
            availableRoom.checkIn = checkIn;
            availableRoom.checkOut = checkOut;
            availableRoom.adult = adult;
            availableRoom.child = child;
            availableRoom.save();
            user.rooms.push(room);
        });
        await user.save();
        res.status(201).json('room booked successfully.');
    } catch (error) {
        res.status(500).json(`Server error: ${error.message}`);
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await Room.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(`Server error: ${error.message}`);
    }
};