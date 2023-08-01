import { IRequestGetAllDTO } from "../../../../interfaces/dtos/controllers/posts/get-all-posts-dto"
import { IInputGetAllDTO } from "../../../../interfaces/dtos/repositories/posts/get-all-posts-dto"
import { IOutputGetAllDTO } from "../../../../interfaces/dtos/use-cases/posts/get-all-posts-dto"
import { GetAllPostsDTO } from "../get-all-posts-dto"

describe("Get all posts dto", () => {
  let getAllPostsDTO: GetAllPostsDTO

  beforeAll(() => {
    getAllPostsDTO = new GetAllPostsDTO()
  })

  it("Should be able to return error when type is empty", async () => {
    try {
      const input = {
        params: {
          type: ""
        }
      }
      getAllPostsDTO.input(input as IRequestGetAllDTO)
    } catch (error: any) {

      const sut = error

      expect(sut.message).toEqual("Tipo do post é obrigatório!")
    }
  })

  it("Should be able to return type", async () => {
    const input = {
      params: {
        type: "common"
      }
    }

    const sut = getAllPostsDTO.input(input as IRequestGetAllDTO)

    expect(sut).toEqual({
      type: "common"
    })
  })

  it("Should be able to output posts", async () => {
    const output: IOutputGetAllDTO = {
      result: [{
        postId: '1380e2fb-7f83-40d4-a4ee-9f7680ce2c7b',
        title: "string",
        description: "string",
        imgSrc: "string",
        author: "string",
        isAuthorized: false
      }],
      message: "Produto cadastrado com sucesso!"
    }

    const sut = getAllPostsDTO.output(output)

    expect(sut).toEqual(output)
  })
})