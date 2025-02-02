import mongoose from "mongoose";
import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users })
    }
    catch (error) {
        console.log("error in fetching users:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const postUser = async (req, res) => {
    const user = req.body //user body will send this data

    if (!user.name || !user.age || !user.email) {
        return res.status(400).json({ success:false, message: "Please provide all fields" });
    }

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser });
    }
    catch (error) {
        console.error("Error in Create User:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const putUser = async (req, res) => { //patch for updating some fields, put for all fields
    const {id} = req.params;

    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, {new: true});
        res.status(200).json({ success: true, data: updatedUser });
    }
    catch (error) {
        console.log("error in updating user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User deleted" });
    }
    catch (error) {
        console.log("error in deleting user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};