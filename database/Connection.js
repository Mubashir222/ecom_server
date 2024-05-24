const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DbConnect = () => {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
        dbName: process.env.NEXT_PUBLIC_DB_NAME,
    }).then(() => {
        console.log('Connected to MongoDB');
    }
    ).catch((error) => {
        console.error('Error:', error.message);
    });
}

module.exports = { DbConnect };