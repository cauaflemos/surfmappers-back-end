import { app } from "../../../../app"
import request from "supertest"

describe("Get all posts controller", () => {
  it("Should be able to validate put all posts for PUT protocol", async () => {
    const sut = await request(app).put("/gallery/post/authorize/6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57")

    expect(sut.status).toBe(200)
    expect(sut.body).toEqual("Post autorizado com sucesso!")
  })
})