const express = require('express');
const router = express.Router();

const generateProducts = require('../../seed/products');

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get('/', async(req, res) => {
    try {
        let products = await generateProducts(20);
        res.json(products);
    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error!');
    }
});

// @route   GET /api/products/:id
// @desc    Get single product
// @access  Public
router.get('/:id', async(req, res) => {
    if(isNaN(req.params.id)) {
        return res.status(400).json({err: "Invalid ID"});
    }
        
    try {
        let products = await generateProducts(1);
        res.json(products);
    } catch(err) {
         console.error(err);
         res.status(500).send('Server Error!');
    }
});

module.exports = router;
