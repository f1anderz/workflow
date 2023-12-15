const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    nickname: {
        type: String
    },
    login: {
        type: String
    },
    password: {
        type: String
    },
    registrationDate: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    company: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);