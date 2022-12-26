import { Store } from "./../domain/store.entity";
import { autoInjectable } from "tsyringe";
import { MySQLConnector } from "./../../../shared/infrastructure/mysql-connector";
import { StoreRepository } from "../domain/store.repository";

@autoInjectable()
export class StoreMysqlRepository implements StoreRepository {
  private readonly dbConnection: MySQLConnector;

  constructor(connector: MySQLConnector) {
    this.dbConnection = connector;
    this.dbConnection.connect();
  }

  private toDomain = (data: any) => {
    console.log(data);
    const store = new Store(data.id, data.name);
    return store;
  };

  findAll = (result: any) => {
    const connection = this.dbConnection.getConnection();
    connection.query("select * from store", (err, rows) => {
      if (err) result(err, null);
      return result(
        null,
        rows.map((store: any) => this.toDomain(store))
      );
    });
  };

  save = (store: Store, result: any) => {
    const connection = this.dbConnection.getConnection();

    connection.query("insert into store set ?", store, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, res);
    });
  };

  count = (result: any) => {
    const connection = this.dbConnection.getConnection();
    connection.query("select count(*) as id from store", (err, res) => {
      if (err) result(err, null);
      result(null, res[0].id);
    });
  };
}
