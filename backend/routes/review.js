const express = require('express');
const Review = require('../models/Review');
const User = require('../models/User');

const router = express.Router();

// Get reviews
router.get('/reviews/:itemId', async (req, res) => {
    const { itemId } = req.params;

    try {
        const reviews = await Review.findAll({ where: { itemId } });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching reviews' });
    }
});

// Post a review
router.post('/reviews', async (req, res) => {
    const { text, rating, itemId, userId } = req.body;

    try {
        const review = await Review.create({ text, rating, itemId, userId });
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: 'Error posting review' });
    }
});

// Edit a review
router.put('/reviews/:id', async (req, res) => {
    const { id } = req.params;
    const { text, rating } = req.body;

    try {
        const review = await Review.findByPk(id);
        review.text = text;
        review.rating = rating;
        await review.save();
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ error: 'Error updating review' });
    }
});

// Delete a review
router.delete('/reviews/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Review.destroy({ where: { id } });
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting review' });
    }
});

module.exports = router;
