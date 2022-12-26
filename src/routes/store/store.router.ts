import express, { Request, Response } from "express";
import { container } from "tsyringe";
import { StoreController } from "../../api/store/infrastructure/store.controller";

const router = express.Router();

const storeController = container.resolve(StoreController);

router.get("/get-all", storeController.getAllStores);

router.post("/create", storeController.createStore);

export default router;
