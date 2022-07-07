import mongoose from "mongoose";
const schemaUser = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    token: {
        type: String
    }
}, 
    {
        timestamps: true
    }
);
const User= mongoose.model("User", userShema);
export default userModel;