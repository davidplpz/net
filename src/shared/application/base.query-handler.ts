import { Query } from './base.query';

export interface QueryHandler {
    handle(query: Query): any;
}