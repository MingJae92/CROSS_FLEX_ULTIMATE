import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./Data_Base_Connection/DB_Connection.js";
import registerCustomer from "./Routes/register_routes.js";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "..", "config", ".env") });
connectDB();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
// app.use(cors());



app.use("/register", registerCustomer);

try {
  app.listen(port, () => {
    console.log(`Server now connected to port ${port}`);
  });
} catch (error) {
  console.error("Error starting the server:", error.message);
}
