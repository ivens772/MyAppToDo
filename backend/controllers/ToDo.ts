  import   *as activityModel from "../models/ToDo"
  import  {Request, Response} from "express"




export const createActivity= async(req:Request, res:Response) => {
    const {activity, done} = req.body
    if(!activity ) return console.log("empty property")
    try {
        const data = await activityModel.ToDoModel(activity, done)
        res.status(200).json({ok:true, data:data})
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
        throw error
    }
   
}


export const getAll = async(req:Request, res:Response) => {
    try {
        const data = await activityModel.getToDoModel()
        res.json(data)
    } catch (error) {
        
    }
}

export const deleteActivity = async(req:Request, res:Response) => {
 
    try {
        await activityModel.deleteActModel()
        res.status(200).json({ok: true, message: "campos eliminados"})
    } catch (error) {
        throw error
    }
}

export const  getById = async (req:Request, res:Response) => {
    const idAct = req.params.id
    try {
        const data = await activityModel.getByIdActModel(idAct)
        res.json(data)
    } catch (error) {
        throw error
    }
}

export const updateActivity = async (req: Request, res: Response)=>{
    const {activity} = req.body
    const idAct = req.params.id
    if(!activity &&  !idAct) return console.log("empty property")
    try {
        await activityModel.updateActModel(activity,idAct)
        res.status(200).json({ok: true})
    } catch (error) {
        res.status(400).json({ok: false, message: "Update invalid"})
    }
    
}