import express from 'express';
import { createActivity, deleteActivity, getAll, getById, updateActivity } from '../controllers/ToDo';

const router = express.Router()

router.post("/", createActivity)
router.get("/", getAll)
router.delete("/", deleteActivity)
router.get("/:id", getById)
router.put("/:id", updateActivity)

export default router