import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Database", conn.connection.host);
    } catch (error) {
        console.log("Error in database connection", error)
    }
}

export default connectDB