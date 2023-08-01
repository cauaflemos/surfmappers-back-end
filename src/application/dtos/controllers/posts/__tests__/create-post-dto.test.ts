import { IInputCreateDTO, IOutputCreateDTO } from "../../../../interfaces/dtos/use-cases/posts/create-post-dto"
import { IRequestCreateDTO } from "../../../../interfaces/dtos/controllers/posts/create-post-dto"
import { CreatePostDTO } from "../create-post-dto"

describe("Create post dto", () => {
  let createProductDTO: CreatePostDTO

  beforeAll(() => {
    createProductDTO = new CreatePostDTO()
  })

  it("should be able to input create post", async () => {
    const input = {
      body: {
        title: "title",
        description: "description",
        imgSrc: "imgSrc",
        author: "author"
      }
    } as IRequestCreateDTO

    const sut = createProductDTO.input(input) as IInputCreateDTO

    expect(sut.title).toEqual(input.body.title)
    expect(sut.description).toEqual(input.body.description)
    expect(sut.imgSrc).toEqual(input.body.imgSrc)
    expect(sut.author).toEqual(input.body.author)
  })

  it("should be able to return error when title is empty", async () => {
    try {
      const input = {
        body: {
          description: "description",
          imgSrc: "imgSrc",
          author: "author"
        }
      } as IRequestCreateDTO
      createProductDTO.input(input) as IInputCreateDTO
    } catch (error: any) {

      const sut = error

      expect(sut.message).toEqual("Título do post é obrigatório!")
    }
  })

  it("should be able to return error when description is empty", async () => {
    try {
      const input = {
        body: {
          title: "title",
          imgSrc: "imgSrc",
          author: "author"
        }
      } as IRequestCreateDTO
      createProductDTO.input(input) as IInputCreateDTO
    } catch (error: any) {

      const sut = error

      expect(sut.message).toEqual("Descrição do post é obrigatório!")
    }
  })

  it("should be able to return error when imgSrc is empty", async () => {
    try {
      const input = {
        body: {
          title: "title",
          description: "description",
          author: "author"
        }
      } as IRequestCreateDTO
      createProductDTO.input(input) as IInputCreateDTO
    } catch (error: any) {

      const sut = error

      expect(sut.message).toEqual("Imagem do post é obrigatório!")
    }
  })

  it("should be able to return error when author is empty", async () => {
    try {
      const input = {
        body: {
          title: "title",
          description: "description",
          imgSrc: "imgSrc"
        }
      } as IRequestCreateDTO
      createProductDTO.input(input) as IInputCreateDTO
    } catch (error: any) {

      const sut = error

      expect(sut.message).toEqual("O autor do post é obrigatório!")
    }
  })

  it("should be able to output create post", async () => {
    const output: IOutputCreateDTO = {
      result: {
        postId: '1380e2fb-7f83-40d4-a4ee-9f7680ce2c7b',
        title: "string",
        description: "string",
        imgSrc: "string",
        author: "string",
        isAuthorized: false
      },
      message: "Produto cadastrado com sucesso!"
    }

    const sut = createProductDTO.output(output)

    expect(sut).toEqual(output.message)
  })
})