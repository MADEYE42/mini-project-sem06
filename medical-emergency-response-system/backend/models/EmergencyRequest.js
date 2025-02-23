const mongoose = require("mongoose");

const EmergencyRequestSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    issue: { type: String, required: true },
    hospitalId: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital", required: true },
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
});

module.exports = mongoose.model("EmergencyRequest", EmergencyRequestSchema);
