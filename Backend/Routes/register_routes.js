// register_routes.js
import express from "express";
import { registerCustomer } from "../Controllers/register_controller.js";

const router = express.Router();

router.post("/", registerCustomer);

export default router;
