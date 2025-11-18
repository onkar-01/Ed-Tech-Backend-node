import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const uri = process.env.MONGODB_URI!;
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`error while connecting to database ${error}`);
    process.exit(1);
  }
};
