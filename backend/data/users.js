const bcrypt = require('bcrypt');

const Users = [
  {
    name: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 18),
    isAdmin: true,
  },

  {
    name: 'techinfoyt',
    email: 'techinfoyt@xyz.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'user',
    email: 'user@user.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

module.exports = Users;
