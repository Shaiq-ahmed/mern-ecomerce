const express = require('express');
const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} = require('../controller/orderController');
const { isAuthenticatedUser } = require('../middlewares/authMiddleware');
const router = express.Router();

//getmy orders

router.route('/myorders').get(isAuthenticatedUser, getMyOrders);

//update user:
router.route('/').post(isAuthenticatedUser, addOrderItem);

//getOrderBYID

router.route('/:id').get(isAuthenticatedUser, getOrderById);

//updateOrder
router.route('/:id/pay').put(isAuthenticatedUser, updateOrderToPaid);

module.exports = router;
