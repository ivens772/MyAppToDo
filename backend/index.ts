import express from 'express';
import routes from './routes';
import cors from "cors";

const app = express();

// Middleware para manejar datos JSON en solicitudes
app.use(express.json());
app.use(cors());
// Rutas de la aplicación
app.use('/', routes);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

