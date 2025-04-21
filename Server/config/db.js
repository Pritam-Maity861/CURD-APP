import mongoose from "mongoose"

const connectdb=async () => {
  try {
    const connectiondb= await mongoose.connect(process.env.MONGO_URI)
  console.log(`MongoDB connected successfully.... DB HOST: ${connectiondb.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection failed...",error);
    process.exit(1);
    
  }
}

export default connectdb;