import { InvalidEmailExcetpion } from "../domain/exceptions/invalid-email.exception";

export class Email {
    private value: string;

    constructor(value: string) {
        if (!this.validateEmail(value)) {
            throw new InvalidEmailExcetpion('Invalid email')
        }
        this.value = value;
    }

    validateEmail = (value: string) => {
        const regex = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );

        return regex.test(value)
    }

    getValue = () => this.value;
}