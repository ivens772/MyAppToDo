import express from 'express';
import userRouter from './user'
import activityRouter from './ToDo'

const router = express.Router();
router.use("/user",userRouter )
router.use("/act",activityRouter )


export default router;