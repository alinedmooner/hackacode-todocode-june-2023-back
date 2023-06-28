import express from "express";
import  { getEmployees, getEmployeeById } from "../controllers/employeeController.js";

const router = express.Router();

router.route("/").get(getEmployees);

router.route("/:id").get(getEmployeeById);

export default router;

