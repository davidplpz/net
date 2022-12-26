export class BaseEntity {
    private id: String;
    private createdAt: Date;

    constructor(id: String) {
        this.id = id;
        this.createdAt = new Date();
    }

    getId = () => this.id;
    getCreatedAt = () => this.createdAt;
}
