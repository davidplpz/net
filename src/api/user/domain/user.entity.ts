import { BaseEntity } from "../../../shared/domain/base.entity";
import { InvalidEmailExcetpion } from '../../../shared/domain/exceptions/invalid-email.exception';
import { Email } from '../../../shared/value-objects/email.value-object';

export class User extends BaseEntity {
    private email: Email;

    constructor(id: string, email: Email) {
        super(id);
        this.email = email;
    }

    getEmail = () => this.email;

    setEmail = (value: string) => new Email(value);
}