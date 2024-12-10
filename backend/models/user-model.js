const mongoose = require('mongoose');
const { Schema } = mongoose;

const genderEnum = ['Male', 'Female', 'Other', 'Prefer Not to Say'];

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String,
        enum: genderEnum,
        default: 'Prefer Not to Say'
    },
    dob: {
        type: Date,
    },
    email: {
        type: String,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    username: {
        type: String
    },
    googleId: {
        type: String
    },
    image: {
        type: String
    },
    bookshelf: {
        wantToRead: [{ type: Schema.Types.ObjectId, ref: 'Book' }], // Books user wants to read
        currentlyReading: [{ type: Schema.Types.ObjectId, ref: 'Book' }], // Books user is reading
        read: [{ type: Schema.Types.ObjectId, ref: 'Book' }] // Books user has read
    }
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;
