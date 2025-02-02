import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    weight:{
        type: Number,
        required: false
    },
    height: {
        type: String,
        required: false
    },
    squat: {
        type: Number,
        required: false
    },
    bench:{
        type: Number,
        required: false
    },
    deadlift:{
        type: Number,
        required: false
    }
}, {
    timestamps: true //createdAt, updatedAt
});

const User = mongoose.model('User', userSchema);

export default User;