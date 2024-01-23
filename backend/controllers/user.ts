import  {Request, Response} from "express"
import * as userModel from "../models/user"
export const createUser =async (req:Request, res:Response) => {
    const {user, email} = req.body
    if (!user && !email) {
        res.status(400).json({ok: false, message: "se requiren campos de usuario y email"})
    }
    try {
            const userId = await userModel.createUser(user, email)

            res.json({userId, user,email})
    } catch (error) {
        console.error('Error al crear un usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const getUser = async (req:Request, res:Response) => {
    const data = await userModel.getUser()
    res.json({data})
}

