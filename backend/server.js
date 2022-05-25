const express = require('express');
const dotenv = require('dotenv');
const { errorHandler } = require('./middlewares/errorMiddleware');
require('colors');
const databaseConnection = require('./config/config');
const productRoutes = require('./Routes/productRoutes');
const userRoutes = require('./Routes/userRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');

//dotenv config
dotenv.config();

//apply middleware body-parser
app.use(express.json());
app.use(cookieParser());

//connectDb
databaseConnection();

app.use('/api', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/key/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} MODE on port ${process.env.PORT}`
      .inverse
  );
});
