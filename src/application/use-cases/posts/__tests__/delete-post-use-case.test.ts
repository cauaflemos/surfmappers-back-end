import { PostsRepository } from "../../../interfaces/repositories/posts-repository"
import { InMemoryPostsRepository } from "../../../../infra/database/repositories/posts-repository"
import { DeletePostUseCase } from "../delete-post-use-case"
import { IOutputDeleteDTO } from "../../../interfaces/dtos/use-cases/posts/delete-post-dto"
import generator from "../../../factories/helpers/generator"

describe("Delete post use case", () => {
  let postsRepository: PostsRepository
  let deletePostUseCase: DeletePostUseCase

  beforeAll(() => {
    postsRepository = new InMemoryPostsRepository(generator)
    deletePostUseCase = new DeletePostUseCase(postsRepository)
  })

  it("should be able to delete a post by id", async () => {
    const sut = await deletePostUseCase.execute({ postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57" }) as IOutputDeleteDTO

    expect(sut).toEqual({
      message: "Post deletado com sucesso!"
    })
  })
  
  it("Err to delete post", async () => {
    try {
        const postsRepository: any = ""
        const invalidGetAllPostsUseCase = new DeletePostUseCase(postsRepository)
        await invalidGetAllPostsUseCase.execute({ postId: "123" })
    } catch (error: any) {

        const sut = error

        expect(sut.message).toEqual("this.postRepository.deleteById is not a function")
    }
})

})