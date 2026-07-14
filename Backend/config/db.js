import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const mongo_uri = process.env.DB_URI
const db_name = process.env.DB_NAME

const connectDB = async () => {
    try {
        await mongoose.connect(`${mongo_uri}/${db_name}`)
        console.log('dbConnected');
    } catch (err) {
        console.log(err)
    }
}

export default connectDB
