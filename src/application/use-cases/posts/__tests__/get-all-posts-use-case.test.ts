import { PostsRepository } from "../../../interfaces/repositories/posts-repository"
import { GetAllPostUseCase } from "../get-all-posts-use-case"
import { InMemoryPostsRepository } from "../../../../infra/database/repositories/posts-repository"
import { IOutputGetAllDTO } from "../../../interfaces/dtos/use-cases/posts/get-all-posts-dto"
import generator from "../../../factories/helpers/generator"

describe("Get all posts use case", () => {
  let postsRepository: PostsRepository
  let getAllPostUseCase: GetAllPostUseCase

  beforeAll(() => {
    postsRepository = new InMemoryPostsRepository(generator)
    getAllPostUseCase = new GetAllPostUseCase(postsRepository)
  })

  it("should be able to get all posts authorized", async () => {
    const sut = await getAllPostUseCase.execute({ type: "common" }) as IOutputGetAllDTO

    expect(sut).toEqual({
      result: [
        {
          postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946",
          title: "Foto Casamento",
          author: "Pedro Silva",
          description: "Casamento na praia",
          imgSrc: "https://cdn.alboompro.com/5ebc06c9e716a10001d89e71_6340062c3a7c0b000144d073/original_size/elopement-wedding-84.jpg?v=1",
          isAuthorized: true
        },
        {
          postId: "87b229c5-2ced-4597-95dc-b530a6833a82",
          title: "Foto Casamento",
          author: "Yago Lima",
          description: "Flores no casal",
          imgSrc: "https://www.noivaansiosa.com.br/wp-content/uploads/2020/08/casamento-na-praia-1-5.jpg",
          isAuthorized: true
        },
        {
          postId: "c30e950f-882d-42ff-b97b-e7565b6dcf84",
          title: "Foto no Casamento",
          author: "Silvana",
          description: "Beijo no altar",
          imgSrc: "https://welcomeweddings.com.br/wp-content/uploads/2022/01/Casamento-na-Praia-Simples-6-Formas-de-Organizar-1.jpg",
          isAuthorized: true
        },
        {
          postId: "474c96d3-9545-4613-883e-aa6a2a580cc3",
          title: "Foto do altar!",
          author: "Felipe",
          description: "Altar",
          imgSrc: "https://www.noivasonline.com/img/fi-casamento-na-praia-tenda.jpg",
          isAuthorized: true
        },
        {
          postId: "2d601764-114d-49e3-9e83-03b1be818db7",
          title: "Noite linda!",
          author: "Mario",
          description: "Casamento iluminado",
          imgSrc: "https://portaldasnoivas.org/wp-content/uploads/2018/07/casamento-na-praia-a-noite.jpg",
          isAuthorized: true
        },
        {
          postId: "b0f684b9-2c4d-41a7-b6cf-b4cada55657b",
          title: "Casal lindooo!",
          author: "Leonardo",
          description: "Deus abençoe o casal",
          imgSrc: "https://www.noivaansiosa.com.br/wp-content/uploads/2020/08/casamento-na-praia-1.jpg",
          isAuthorized: true
        }
      ], message: "Posts autorizados!"
    })
  })

  it("should be able to get all posts not authorized", async () => {
    const sut = await getAllPostUseCase.execute({ type: "auth" }) as IOutputGetAllDTO

    expect(sut).toEqual({
      result: [
        {
          postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57",
          title: "Foto Altar",
          author: "Caio Lemos",
          description: "A noiva no altar",
          imgSrc: "https://cdn0.casamentos.com.br/article-vendor/8379/3_2/960/jpg/mari-leo-previas-49_13_178379-166013221645741.jpeg",
          isAuthorized: false
        },
      ], message: "Posts ainda não autorizados!"
    })
  })

  it("Err to get all posts", async () => {
    try {
      const postsRepository: any = ""
      const invalidGetAllPostsUseCase = new GetAllPostUseCase(postsRepository)
      await invalidGetAllPostsUseCase.execute({ type: "auth" })
    } catch (error: any) {

      const sut = error

      expect(sut.message).toEqual("this.postRepository.getAll is not a function")
    }
  })

})