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
    const sut = await getAllPostUseCase.execute() as IOutputGetAllDTO

    expect(sut).toEqual({
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
  
  it("Err to get all posts", async () => {
    try {
        const postsRepository: any = ""
        const invalidGetAllPostsUseCase = new GetAllPostUseCase(postsRepository)
        await invalidGetAllPostsUseCase.execute()
    } catch (error: any) {

        const sut = error

        expect(sut.message).toEqual("this.postRepository.getAll is not a function")
    }
})

})