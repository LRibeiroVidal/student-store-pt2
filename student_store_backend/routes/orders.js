const db = require("../db");
const express = require("express");
const router = express.Router();

class Order {
	static async listOrdersForUser() {
		// Gets all orders from an authorized user
	}

	static async createOrder(order) {
		// gets order form user and adds it to the database
	}
}

router.get("/", async (req, res, next) => {
	const userOrders = listOrdersForUser();
	// res.status(400).send({ products: userOrders });
});

router.post("/", async (req, res, next) => {
	createOrder(req.body);
	// res.status(400).send({ products: userOrders });
});

module.exports = Order;
module.exports = router;
