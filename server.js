const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const UtilsRouter = require('./backend/routers/utils.router.js');
const RecipeRouter = require('./backend/routers/recipe.router.js');

const app = express();
const port = process.env.PORT || 3000;

// const __dirname = path.resolve();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to Database!');
});

app.use(UtilsRouter);
app.use('/api/recipe', RecipeRouter);

console.log(path.resolve());
app.use('/media', express.static(path.join(__dirname, '/media/photos')));

// app.use(express.static(path.join(__dirname, '/frontend/build/web')));

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
