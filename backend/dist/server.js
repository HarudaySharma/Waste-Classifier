import express from 'express';
import { config } from 'dotenv';
import wasteClassifyRoute from "./routes/wasteClassify.route.js";
import cors from 'cors';
config();
const app = express();
const PORT = process.env.PORT;
app.use(cors({
    origin: "https://waste-classifier-client.vercel.app"
}));
app.use(express.json());
app.use('/api', wasteClassifyRoute);
app.get('/', (req, res) => {
    res.json({ message: "server is running" });
});
app.listen(PORT, async () => {
    console.log(`server listening on PORT:${PORT}`);
});
