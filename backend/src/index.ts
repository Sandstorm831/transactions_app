import { apiV1Route } from "./routes";
import express from 'express';
import cors from 'cors';

const app = express();
const PORT:number=3000;

app.use(cors());
app.use(express.json());
app.use('/api/v1', apiV1Route);

app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
})