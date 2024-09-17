import mongoose from "mongoose";

const connectToMongo = async () => {
    const URI  = process.env.MONGO_DB_URI
  try {
    await mongoose.connect(URI);
    console.log("Connected to mongo DB");
  } catch (error) {
    console.error("connectToMongoDB.js", " :: Error ❌ : ", error);
  }
};

export default  connectToMongo;
