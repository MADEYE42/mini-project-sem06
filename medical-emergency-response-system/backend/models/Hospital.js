const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    bedAvailability: { type: Number, required: true },
    vehicles: { type: Number, required: true },
});

module.exports = mongoose.model("Hospital", HospitalSchema);
