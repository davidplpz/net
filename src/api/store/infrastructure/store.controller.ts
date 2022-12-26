import { Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import { Store } from "../domain/store.entity";
import { StoreMysqlRepository } from "./store-mysql.repository";

@autoInjectable()
export class StoreController {
  private readonly storeRepository: StoreMysqlRepository;

  constructor(storeRepository: StoreMysqlRepository) {
    this.storeRepository = storeRepository;
  }

  getAllStores = (_req: Request, res: Response) => {
    this.storeRepository.findAll((err: any, result: any) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(result);
    });
  };

  createStore = (_req: Request, res: Response) => {
    this.storeRepository.count((err: any, id: any) => {
      if (err) console.log(err);
      const store = new Store(id + 1, _req.body.name);
      this.storeRepository.save(store, (err: any, result: any) => {
        if (err) return res.status(500);
        console.log(result);
        return res.status(201).send(store.getId());
      });
    });
  };
}
