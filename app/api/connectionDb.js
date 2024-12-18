const mongoose = require('mongoose');

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Sikeres csatlakozás a Recipe MongoDb szerverhez!');
  } catch (error) {
    console.error('Csatlakozási hiba a Recipe MongoDb szerverhez:', error);
    // process.exit(1);
  }
};
 
module.exports = connectDB;