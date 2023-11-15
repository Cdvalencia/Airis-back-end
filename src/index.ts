import express from 'express'
const app = express()

import { notFound } from './middleware/not-found'
import { errorHandlerMiddleware } from './middleware/error-handler'
import authRoute from './routes/auth'
import protectedRoutes from './routes/protected'
import dotenv from 'dotenv';
const cors = require('cors');

dotenv.config()

const port = process.env.PORT || 3000;


// middleware
app.use(express.json())
app.use(cors());
/*
    Manual Cors
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Reemplaza con tu origen permitido
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
*/

// Routes
app.use('/api/user', authRoute);
app.use('/api/protected', protectedRoutes); // Ejemplo Router protegido con JWT  
app.use(notFound)
app.use(errorHandlerMiddleware)


const start = async () => {
    try {
        // await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server listening on port ${port}...`))
    } catch (err) {
        console.log(err);
    }
}

start()