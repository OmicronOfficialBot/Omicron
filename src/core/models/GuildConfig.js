const mongoose = require("mongoose");

const GuildConfig = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        unique: false,
    },
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    prefix: {
        type: String,
        required: true,
        unique: false,
    }
})

module.exports = mongoose.model("Guilds", GuildConfig);