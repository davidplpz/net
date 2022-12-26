import { BaseEntity } from "./../../../shared/domain/base.entity";

export class Store extends BaseEntity {
  private name: String;

  constructor(id: String, name: String) {
    super(id);
    this.name = name;
  }

  getName = () => this.name;
}
