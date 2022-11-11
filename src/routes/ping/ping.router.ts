import express, { Request, Response } from "express"

const router = express.Router();

router.get("/ping", (_req: Request, res: Response) => {
    res.status(200).send('pong')
})

export default router;