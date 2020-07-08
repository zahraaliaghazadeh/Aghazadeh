const router = require("express").Router();
const productRoutes = require("./product");

// Product routes
router.use("/product", productRoutes);

module.exports = router;
