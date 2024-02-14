import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./Data_Base_Connection/DB_Connection.js"; // Replace with the actual path

// Get the current module's filename
const __filename = new URL(import.meta.url).pathname;
// Get the directory name from the filename
const __dirname = path.dirname(__filename);

// Load environment variables from the .env file in the config folder at the top level
dotenv.config({ path: path.resolve(__dirname, "..", "config", ".env") });

// Connect to MongoDB
connectDB();

const app = express();
const port = process.env.SERVER_PORT || 5000;

// Define a route that sends "Hello world" for the root path ("/")
app.get("/", (req, res) => {
  res.send("Hello world");
});

try {
  // Start the Express server and listen on the specified port
  app.listen(port, () => {
    console.log(`Server now connected to port ${port}`);
  });
} catch (error) {
  // If an error occurs during server startup, log the error message
  console.error("Error starting the server:", error.message);
}