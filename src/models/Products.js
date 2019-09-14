const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

// creating schema for DB
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,       
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    web_url: {
        type: String,
        required: true
    },
    company: {
        type: String,
        require: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// inserting pagination in DB
ProductSchema.plugin(mongoosePaginate);

// registering a model in the application
mongoose.model('Product', ProductSchema);