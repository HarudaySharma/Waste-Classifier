import express, { Application } from 'express';
import {config} from 'dotenv';
import initialRoute from "./routes/initial.route.js"
import { loadModel } from './utils/lgModel.js';
import path from 'path'

config();


const app: Application = express();

const PORT: string = process.env.PORT || "3000";

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


app.listen(PORT, () => { 
    console.log(`server listening on PORT:${PORT}`);
    loadModel();
})

app.use(express.json());

app.use('/api/' , initialRoute);

