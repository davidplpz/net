import 'reflect-metadata';
import express, { Application } from "express"
import pingRouter from './routes/ping/ping.router';
import storeRouter from './routes/store/store.router';

const app: Application = express();

app.use(express.json())

app.use('/status', pingRouter);

app.use('/store', storeRouter);

export default app;