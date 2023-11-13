const mongoose = require('mongoose');
// require('dotenv').config({ path: ('../.env') });

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Conneected : ${conn.connection.host}`.bgWhite.underline.bold);
};

module.exports = connectDB;