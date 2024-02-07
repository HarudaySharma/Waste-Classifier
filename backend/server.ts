import express, { Application } from 'express';
import cors from "cors"
import {config} from 'dotenv';
import initialRoute from "./routes/initial.route.js"
import { loadModel } from './utils/lgModel.js';

config();


const app: Application = express();

const PORT: string = process.env.PORT || "3000";

app.listen(PORT, () => { 
    console.log(`server listening on PORT:${PORT}`);
    loadModel();
})

app.use(cors());
app.use(express.json());

app.use('/api/' , initialRoute);

