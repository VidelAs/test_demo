import express from "express";
import conectarDB from "./config/db";
import dotenv from "dotenv";
//Importar el routes
import userRouter from "./routes/userRoutes.js";


const app= express ();
//Routing 
app.use(express.json());

dotenv.config();
//Conexion a base de datos
conectarDB();

//Routing
app.use('/api/users', userRouter);
const PORT = process.env.PORT|| 4001;

app.listen(PORT, () => {
console.log('Server is running on port 4000');
});
app.get('/api/users', userRouter);