const db = require("../db");
const express = require("express");
const { requireAuthenticatedUser } = require("../middleware/security");
const router = express.Router();

class Order {
	static async listOrdersForUser(user) {
		// Gets all orders from an authorized user
	}

	static async createOrder(order, user) {
		// gets order from user and adds it to the database
		const query = `
        INSERT INTO orders(customer_id)
        
        `;
	}
}

router.get("/", requireAuthenticatedUser, async (req, res, next) => {
	const user = res.locals.user;
	const userOrders = listOrdersForUser(user);
	res.status(400).send({ orders: userOrders });
});

router.post("/", requireAuthenticatedUser, async (req, res, next) => {
	const user = res.locals.user;
	createOrder(req.body, user);
	res.status(400).send({ order: req.body });
});

module.exports = Order;
module.exports = router;
