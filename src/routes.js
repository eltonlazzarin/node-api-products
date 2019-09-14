const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// creating route products
routes.get("/products", ProductController.index); 
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

// exporting routes file
module.exports = routes;


