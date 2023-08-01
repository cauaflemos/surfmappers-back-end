import validate from "../../../../factories/helpers/validate"
import { IRequestUpdateDTO } from "../../../../interfaces/dtos/controllers/posts/update-post-dto"
import { IOutputUpdateDTO } from "../../../../interfaces/dtos/use-cases/posts/update-post-dto"
import { UpdatePostsDTO } from "../update-post-dto"

describe("Update posts dto", () => {
  let updatePostsDTO: UpdatePostsDTO

  beforeAll(() => {
    updatePostsDTO = new UpdatePostsDTO(validate)
  })

  it("should'nt be able to return error when postId is empty", async () => {
    try {
      const input = {
        params: {
          postId: ""
        }
      }
      await updatePostsDTO.input(input as IRequestUpdateDTO)
    } catch (error: any) {

      const sut = error

      expect(sut.message).toEqual("Id do post é obrigatório!")
    }
  })

  it("Should be able to update", async () => {
    const input = {
      params: {
        postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57"
      }
    }

    const sut = await updatePostsDTO.input(input as IRequestUpdateDTO)

    expect(sut).toEqual({
      postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57"
    })
  })

  it("Should be able to output posts message", async () => {
    const output: IOutputUpdateDTO = {
      result: {
        postId: '1380e2fb-7f83-40d4-a4ee-9f7680ce2c7b',
        title: "string",
        description: "string",
        imgSrc: "string",
        author: "string",
        isAuthorized: false
      },
      message: "Post autorizado com sucesso!"
    }

    const sut = updatePostsDTO.output(output)

    expect(sut).toEqual(output.message)
  })
})