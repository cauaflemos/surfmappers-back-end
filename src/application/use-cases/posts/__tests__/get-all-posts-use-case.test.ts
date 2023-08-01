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