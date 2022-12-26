import request from "supertest"
import app from '../../app'

describe("GET /api/ping", () => {
    it("should return pong", async () => {
        const res = await request(app).get("/status/ping");

        expect(res.statusCode).toEqual(200)
    })
})