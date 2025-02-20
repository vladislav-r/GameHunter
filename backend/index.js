require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
// const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

//Registration?
import express from 'express';
import mongoose from 'mongoose';
import registerRoute from './routes/register.js';


const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
// app.use(fileUpload({}));
app.use('/api', router);


//Connect MongoDB
mongoose.connect('mongodb://localhost:27017/your-db-name', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));


// Обработка ошибок, последний Middleware
app.use(errorHandler);

const start = async () => {
	try {
		// await sequelize.authenticate();
		// await sequelize.sync();
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();
