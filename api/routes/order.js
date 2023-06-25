const router = require("express").Router();

const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenAndadmin,
  verifyTokenAndAuthuncations,
} = require("./verifyToken");

router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id", verifyTokenAndadmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verifyTokenAndadmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", verifyTokenAndAuthuncations, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", verifyTokenAndadmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/stats", verifyTokenAndadmin, async (req, res) => {
  const date = new Date();

  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date.setMonth(lastMonth.getMonth() - 1));

  try {
    const data = await Order.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
