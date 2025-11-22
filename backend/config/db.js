import mongoose from 'mongoose';

const connectDB = async (uri) => {
  if (!uri) throw new Error('MONGO_URI is required');
  mongoose.set('strictQuery', true);
  const opts = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
  };

  try {
    await mongoose.connect(uri, opts);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    throw err;
  }
};

export default connectDB;
