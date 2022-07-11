const db = require("../db");
const express = require("express");
const router = express.Router();

class Store {
	static async listProducts() {
		const query = `SELECT * FROM products`;
		const response = await db.query(query);

		return response.rows;
	}
}

router.get("/", async (req, res, next) => {
	const fullStore = listProducts();
	res.status(400).send({ products: fullStore });
});

module.exports = Store;
module.exports = router;
