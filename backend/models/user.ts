import db from '../db/connect';
import { OkPacket } from 'mysql2';
export async function createuserTable(){
    try {
           const connection = await db.getConnection()
           await connection.execute(`
           CREATE TABLE IF NOT EXISTS ToDo(
            id INT AUTO_INCREMENT PRIMARY KEY,
            activity VARCHAR(255) NOT NULL,
            done BOOLEAN NOT NULL
           )
           `);
           connection.release()
           console.log("Tabla users creada exitosamente")
    } catch (error) {
        console.log("error al crear la tabla de usuario: " + error)
        throw error
    }
}

export async function createUser(username: string, email: string){
    try {
        const [result] = await db.execute<OkPacket>(`INSERT INTO users (username, email) values (?, ?)`, [username, email])
        return result.insertId;
    } catch (error) {
        console.error('Error al crear un usuario:', error);
        throw error;
    }
}

export async function getUser(){
    try {
        const [data] = await db.execute(`Select * from users`)
        return data
    } catch (error) {
        console.error('Error al crear un usuario:', error);
        throw error;
    }
}