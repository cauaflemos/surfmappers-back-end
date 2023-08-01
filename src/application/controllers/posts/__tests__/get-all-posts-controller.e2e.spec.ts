import { app } from "../../../../app"
import request from "supertest"

describe("Get all posts controller", () => {
  it("Should be able to validate get all posts for GET protocol", async () => {
    const sut = await request(app).get("/list-posts-auth")

    expect(sut.status).toBe(200)
    expect(sut.body).toEqual({
      result: [
        {
          postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946",
          title: "Foto Casamento",
          author: "Pedro Silva",
          description: "Casamento na praia",
          imgSrc: "https://example.com/image2.jpg",
          isAuthorized: true
        }
      ], message: "Posts autorizados!"
    })
  })
})