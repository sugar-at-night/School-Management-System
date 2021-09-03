import express from "express";
import {
  getStudents,
  createStudents,
  deleteStudents,
} from "../controller/students.js";
import StudentData from "../models/students.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudents);
router.delete("/:id", deleteStudents);

export default router;
