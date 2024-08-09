const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');
const User = require('./User');

const Review = sequelize.define('Review', {
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    itemId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Review.belongsTo(User);
User.hasMany(Review);

module.exports = Review;
