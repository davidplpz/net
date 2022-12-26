import { Query } from './../application/base.query';
import mysql from 'mysql';

export class MySQLConnector {
    private connection;
    constructor() {
        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'example',
            database: 'store'
          });
    }

    connect = () => this.connection.connect();

    getConnection = () => this.connection; 

    end = () => this.connection.end();
}