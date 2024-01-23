import { OkPacket } from 'mysql2';
import db from '../db/connect';

export async function ToDoModel(activity:string, done:boolean) {
    try {
        const [res] = await db.execute<OkPacket>(`
            insert into ToDo(activity, done) value (?,?)
        `, [activity, done]);
        return res.insertId
    } catch (error) {
        console.log("Error to Insert Activity", error)
        throw error;
    }
}

export async function getToDoModel(){
    try {
        const [data] = await db.execute(`select * from ToDo`)
        return (data);
    } catch (error) {
        console.log("Error to get AllActivity", error)
        throw error;
    }
    

}

export async function deleteActModel(){
    try {
        const [act] = await db.execute(`delete  from ToDo `)
        return act
    } catch (error) {
        console.log("error en la eliminacion de actividad")
        throw error
    }
}

export async function getByIdActModel(IdAct:any){
    try {
        const [act] = await db.execute(`select activity  from ToDo where id = ?`, [IdAct])
        return act
    } catch (error) {
        console.log("error al encotrar la actividad")
        throw error
    }
}

export async function updateActModel(data:any, IdAct: any) {
    try {
        const [act] = await db.execute(`UPDATE todo SET activity=? where id=?`, [data,IdAct])
        return act
    } catch (error) {
        console.log("error al actualizar")
        throw error
    }
}