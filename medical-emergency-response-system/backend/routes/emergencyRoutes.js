const express = require("express");
const EmergencyRequest = require("../models/EmergencyRequest");
const router = express.Router();

// Create Emergency Request
router.post("/request", async (req, res) => {
    try {
        const { userId, issue, hospitalId, status } = req.body;
        const newRequest = new EmergencyRequest({ userId, issue, hospitalId, status: "Pending" });
        await newRequest.save();
        res.status(201).json({ message: "Emergency request submitted" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Get User Emergency Requests
router.get("/user/:id", async (req, res) => {
    try {
        const requests = await EmergencyRequest.find({ userId: req.params.id });
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;