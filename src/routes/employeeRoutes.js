import express from "express";
import { getEmployees } from "../controllers/employeeController.js";

const router = express.Router();

router.route("/").get(getEmployees);

export default router;
