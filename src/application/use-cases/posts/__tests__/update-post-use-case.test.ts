import { PostsRepository } from "../../../interfaces/repositories/posts-repository"
import { GetAllPostUseCase } from "../get-all-posts-use-case"
import { InMemoryPostsRepository } from "../../../../infra/database/repositories/posts-repository"
import generator from "../../../factories/helpers/generator"
import { UpdatePostUseCase } from "../update-post-use-case"
import { IOutputUpdateDTO } from "../../../interfaces/dtos/use-cases/posts/update-post-dto"

describe("Update post use case", () => {
  let postsRepository: PostsRepository
  let updatePostUseCase: UpdatePostUseCase

  beforeAll(() => {
    postsRepository = new InMemoryPostsRepository(generator)
    updatePostUseCase = new UpdatePostUseCase(postsRepository)
  })

  it("should be able to update a post by id", async () => {
    const sut = await updatePostUseCase.execute({ postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57" }) as IOutputUpdateDTO

    expect(sut).toEqual({
      result: {
          postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57",
          title: "Foto Altar",
          author: "Caio Lemos",
          description: "A noiva no altar",
          imgSrc: "https://cdn0.casamentos.com.br/article-vendor/8379/3_2/960/jpg/mari-leo-previas-49_13_178379-166013221645741.jpeg",
          isAuthorized: true
      }
      , message: "Post autorizado com sucesso!"
    })
  })
  it("should'nt be able to update a post by id", async () => {
    try {
      await updatePostUseCase.execute({ postId: "123" }) as IOutputUpdateDTO
    } catch (error: any) {
      const sut = error
      expect(sut.message).toEqual("Cannot set properties of undefined (setting 'isAuthorized')")
    }
  })
  
  it("Err to update post", async () => {
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