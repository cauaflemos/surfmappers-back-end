import { app } from "../../../../app"
import request from "supertest"

describe("Get all posts controller", () => {
  it("Should be able to validate get all posts for GET protocol", async () => {
    const sut = await request(app).get("/gallery/post/list/common")

    expect(sut.status).toBe(200)
    expect(sut.body).toEqual({
      result: [
        {
          postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946",
          title: "Foto Casamento",
          author: "Pedro Silva",
          description: "Casamento na praia",
          imgSrc: "https://cdn.alboompro.com/5ebc06c9e716a10001d89e71_6340062c3a7c0b000144d073/original_size/elopement-wedding-84.jpg?v=1",
          isAuthorized: true
        }
      ], message: "Posts autorizados!"
    })
  })
})