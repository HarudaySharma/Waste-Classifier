import express, { Application } from 'express';
import {config} from 'dotenv';
import initialRoute from "./routes/initial.route.js"
import { loadModel } from './utils/lgModel.js';
import cors from 'cors';

config();

const app: Application = express();
const PORT: string = process.env.PORT as string | "3000";

app.use(cors());
app.use(express.json());

app.use('/api' , initialRoute);

app.listen(PORT, () => { 
    console.log(`server listening on PORT:${PORT}`);
    loadModel();
})


