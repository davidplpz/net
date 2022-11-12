export class BaseEntity {
    private id: string;
    private createdAt: Date;

    constructor(id: string) {
        this.id = id;
        this.createdAt = new Date();
    }

    getId = () => this.id;
    getCreatedAt = () => this.createdAt;
}
