const asyncHandler = require('express-async-handler');
const ErrorHandler = require('../utils/errorHandler');
const Order = require('../models/orderModel');

exports.addOrderItem = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    return new ErrorHandler('No order found', 400);
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

// get Order by Id

exports.getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.json(order);
  } else {
    return new ErrorHandler('Order not Found', 404);
  }
});

//paidendpoint

exports.updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    (order.isPaid = true),
      (order.paidAt = Date.now()),
      (order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      });
    const updateOrder = await order.save();
    res.send({ message: 'Order Paid', order: updateOrder });
  } else {
    return new ErrorHandler('order not Found', 404);
  }
});

//get my order

exports.getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  if (!orders) {
    return new ErrorHandler('no orders found', 400);
  } else {
    res.json(orders);
  }
});
