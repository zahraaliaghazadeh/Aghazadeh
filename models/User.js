const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "name is required"
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/^[\w\.-]+@[\w\.-]+\.[a-zA-Z]{2,7}$/g, "Please enter a valid email address"]
    },
    password: {
        type: String,
        trim: true,
        validate: [({ length }) => length >= 8, "Password needs to be at least 8 characters"]
    }
    
});

const User = mongoose.model("User", userSchema);

module.exports = User;
