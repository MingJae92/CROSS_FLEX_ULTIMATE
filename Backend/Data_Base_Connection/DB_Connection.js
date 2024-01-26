import mongoose from 'mongoose';
import dotenv from "dotenv";
import path from "path";

// Get the filename of the current module
const __filename = new URL(import.meta.url).pathname;
// Get the directory name from the filename
const __dirname = path.dirname(__filename);

// Load environment variables from the .env file in the config folder at the top level
dotenv.config({ path: path.resolve(__dirname, "..", "config", ".env") });


// Function to connect to MongoDB database
const connectDB = async () => {
  try {
    // Retrieve MongoDB connection string from environment variables
    const mongoURL = `${process.env.MONGO_DB_CONNECTION}`;
    console.log('MongoURL:', mongoURL);
    // Connect to MongoDB using Mongoose
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true, // Use new URL parser
      useUnifiedTopology: true, // Use new server discovery and monitoring engine
    });

    console.log('DB now connected!!!');
  } catch (error) {
    // Log error message if connection fails
    console.error(`MongoDB connection error: ${error.message}`);
    // Exit process with failure if connection fails
    process.exit(1);
  }
};

export {connectDB};
