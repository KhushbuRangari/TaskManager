const mongoose = require('mongoose');

 async function dbConnection() {
   try {
    const connection = await mongoose.connect(process.env.MONGODB_URL)
    console.log("***DB CONNECTED***");
} catch (error) {
    console.log(error);
   }
}

module.exports = dbConnection