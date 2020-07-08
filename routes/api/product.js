const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Product routes for /api/product/
router.route("/")
    .get(productsController.findAll)
    .post(productsController.create);

// Product routes by ID: /api/post/:id
router.route("/:id")
    .get(productsController.findById)
    .put(productsController.update)
    .delete(productsController.remove);

module.exports = router;