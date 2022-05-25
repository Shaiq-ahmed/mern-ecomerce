const mongoose = require('mongoose');
const dotenv = require('dotenv');
const products = require('./data/data');
const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');
const users = require('./data/users');
const databaseConnection = require('./config/config');

dotenv.config();

databaseConnection();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleData);
    console.log('Data Imported!!');
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestory = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
  } catch (error) {
    console.log(`${error}`);
    process.exit();
  }
};

if (process.argv[2] === '-d') {
  dataDestory();
} else {
  importData();
}
