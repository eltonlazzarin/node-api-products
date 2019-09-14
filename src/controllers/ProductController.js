const mongoose = require('mongoose');
const express = require('express');


const Product = mongoose.model('Product');

mongoose.set('useFindAndModify', false);

module.exports = {
    // listing all products
    async index(req, res) {
        const { page = 1 } = req.query // pagination on routes (base_url/products?page=1 or ...products?page=2 ...)
        const products = await Product.paginate({}, { page, limit: 10 } ); // pagination - maximum 10 items per page      

        // return the data in JSON
        return res.json(products);
    },

    // listing only one product per ID
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // creating route to add new records
    async store(req, res) {
        const product = await Product.create(req.body);

        // return the data in JSON
        return res.json(product);
    },

    // updating product data by ID
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { 
            new: true 
        });

        return res.json(product);
    },

    // delete a product by ID
    async destroy (req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send({ message: "Product was deleted correctly" });
    }

};







