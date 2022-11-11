import express, { Application } from "express"
import pingRouter from './routes/ping/ping.router';
const app: Application = express();

app.use(express.json())

app.use('/api', pingRouter)


export default app;