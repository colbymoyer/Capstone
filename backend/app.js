const express = require('express');
const sequelize = require('./db/config');
const authRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/review');

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', reviewRoutes);

sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Error syncing database', err));

module.exports = app;
