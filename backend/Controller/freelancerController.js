// backend/controllers/freelancerController.js

// Import the Freelancer model
const Freelancer = require('../models/Freelancer');

// @desc    Create a new profile
// @route   POST /api/profile
// @access  Public
exports.createProfile = async (req, res) => {
    try {
        // Extract the profile details from the request body
        const { firstName, lastName, areaOfExpertise, yearsOfExperience } = req.body;

        // Create a new profile using the Freelancer model
        const profile = await Freelancer.create({
            firstName,
            lastName,
            areaOfExpertise,
            yearsOfExperience
        });

        // Send a success response with the created profile data
        res.status(201).json({ success: true, data: profile });
    } catch (err) {
        // Send an error response if there's an error creating the profile
        res.status(400).json({ success: false, error: err.message });
    }
};
