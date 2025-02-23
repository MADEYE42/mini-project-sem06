const express = require("express");
const Hospital = require("../models/Hospital");
const router = express.Router();

// Add Hospital Details
router.post("/add", async (req, res) => {
    try {
        const { name, location, bedAvailability, vehicles } = req.body;
        const newHospital = new Hospital({ name, location, bedAvailability, vehicles });
        await newHospital.save();
        res.status(201).json({ message: "Hospital added successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Get Available Hospitals
router.get("/available", async (req, res) => {
    try {
        const hospitals = await Hospital.find({ bedAvailability: { $gt: 0 } });
        res.status(200).json(hospitals);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;