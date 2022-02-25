const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB ${con.connection.host}`)
    } catch (error) {
        console.log('error:',error);
        process.exit(1)
    }
}

module.exports = connectDB
