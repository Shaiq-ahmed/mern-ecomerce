const mongoose = require('mongoose');
const databaseConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB is connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

// const databaseConnection = () => {
//   mongoose
//     .connect(process.env.DB_URL, { useNewUrlParser: true })
//     .then((data) => {
//       console.log(
//         `mongodb is connected to the server: ${data.connection.host}`
//       );
//     });
// };

module.exports = databaseConnection;
