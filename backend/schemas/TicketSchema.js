const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({

    userId: String,

    username: String,

    category: String,

    subcategory: String,

    description: String,

    status: {
        type: String,
        default: "Open"
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Ticket", ticketSchema);