import validate from "../../../../factories/helpers/validate"
import { IRequestDeleteDTO } from "../../../../interfaces/dtos/controllers/posts/delete-post-dto"
import { IOutputDeleteDTO } from "../../../../interfaces/dtos/use-cases/posts/delete-post-dto"
import { DeletePostsDTO } from "../delete-post-dto"

describe("Delete posts dto", () => {
  let deletePostsDTO: DeletePostsDTO

  beforeAll(() => {
    deletePostsDTO = new DeletePostsDTO(validate)
  })

  it("should be able to return error when postId is empty", async () => {
    try {
      const input = {
        params: {
          postId: ""
        }
      }
      await deletePostsDTO.input(input as IRequestDeleteDTO)
    } catch (error: any) {

      const sut = error

      expect(sut.message).toEqual("Id do post é obrigatório!")
    }
  })
  
  it("should'nt be able to delete a post if does not exist", async () => {
    try {
      const input = {
        params: {
          postId: "123"
        }
      }
      await deletePostsDTO.input(input as IRequestDeleteDTO)
    } catch (error: any) {

      const sut = error

      expect(sut.message).toEqual("Post não existe!")
    }
  })

  it("Should be able to delete", async () => {
    const input = {
      params: {
        postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57"
      }
    }

    const sut = await deletePostsDTO.input(input as IRequestDeleteDTO)

    expect(sut).toEqual({
      postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57"
    })
  })

  it("Should be able to output posts message", async () => {
    const output: IOutputDeleteDTO = {
      message: "Post deletado com sucesso!"
    }

    const sut = deletePostsDTO.output(output)

    expect(sut).toEqual(output.message)
  })
})