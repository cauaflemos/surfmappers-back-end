import { app } from "../../../../app"
import request from "supertest"

describe("Create post controller", () => {
	it("Should be able to validate create post for POST protocol", async () => {		
		const sut = await request(app).post("/gallery/post/add").send({
      title: "string",
      description: "string",
      imgSrc: "string",
      author: "string"
    })

		expect(sut.status).toBe(201)
		expect(sut.body).toEqual("Post cadastrado com sucesso!")
	})
})