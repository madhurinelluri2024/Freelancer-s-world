// backend/routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");
const Profile = require("../models/profileModel");

router.post("/profile/create", async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json({ success: true, data: profile });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// Complete Order
router.post("/complete_order", async (req, res) => {
  try {
    const { orderId, payPerHour, numDays } = req.body;
    let number = payPerHour * numDays;
    const order = await Order.create(req.body);
    let k = await Profile.updateOne(
      { _id: orderId },
      { $inc: { wallet: number } },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Order complete successfully", success: true, order });
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

module.exports = router;
