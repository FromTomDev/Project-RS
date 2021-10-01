const mongoose = require('mongoose');
const { isEmail } = require('validator');
const userSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 55,
            unique: true,
            trimp: true
        },
        email: String,
        require: true,
        validate: ,
        lowercase: true,
        trim: true,
    }
)
