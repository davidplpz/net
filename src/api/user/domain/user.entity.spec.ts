import { InvalidEmailExcetpion } from "../../shared/domain/exceptions/invalid-email.exception";
import { Email } from "../../shared/value-objects/email.value-object";
import { User } from "./user.entity"

describe('User entity', () => {
    it('should create an user with a valid email', () => {
        const userEmail = new Email('test@test.com');
        const user = new User('asdf', userEmail);

        expect(user.getEmail()).toBe(userEmail)
    })

    it('should throw exception with an invalid email', () => {
        let error;
        try {
            const userEmail = new Email('test.com');
            const user = new User('asdf', userEmail);
        } catch (exception) {
            error = exception;
        }

        expect(error).toBeInstanceOf(InvalidEmailExcetpion)
    })
})