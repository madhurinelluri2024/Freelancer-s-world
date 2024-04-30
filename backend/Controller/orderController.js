// backend/controllers/orderController.js
const User = require('../models/userModel');
const Freelancer = require('../models/freelancerModel');

// Complete Order
exports.completeOrder = async (req, res) => {
    try {
        const { userId, freelancerId, amount } = req.body;
        
        // Deduct the amount from the user's wallet
        const user = await User.findById(userId);
        user.wallet -= amount;
        await user.save();
        
        // Credit the amount in tokens to the freelancer's wallet
        const freelancer = await Freelancer.findById(freelancerId);
        freelancer.wallet.tokens += amount;
        await freelancer.save();
        
        res.status(200).json({ success: true, message: "Funds transferred successfully." });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};
