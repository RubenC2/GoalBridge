const productsController = require('../controllers/joboffer.controller');
const router = require('express').Router();

router.get("/", productsController.getProduct);
router.post("/", productsController.createProduct);

module.exports = router;