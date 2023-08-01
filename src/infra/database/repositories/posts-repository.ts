import { IInputCreateDTO } from "../../../application/interfaces/dtos/repositories/posts/create-post-dto"
import { IInputGetAllDTO } from "../../../application/interfaces/dtos/repositories/posts/get-all-posts-dto"
import { PostEntity } from "../../../entities/post-entity"
import { PostsRepository } from "../../../application/interfaces/repositories/posts-repository"
import { IGenerator } from "../../../application/interfaces/helpers/generator"
import inMemoryDatabase from "../in-memory-database"
import { IInputUpdateDTO } from "../../../application/interfaces/dtos/repositories/posts/update-post-dto"
import { IInputExistsDTO } from "../../../application/interfaces/dtos/repositories/posts/exists-post-dto"
import { IInputDeleteDTO } from "../../../application/interfaces/dtos/repositories/posts/delete-post-dto"

export class InMemoryPostsRepository implements PostsRepository {
  constructor(private generator: IGenerator) { }

  async create(input: IInputCreateDTO): Promise<PostEntity> {
    const data = {
      postId: this.generator.randomUUID(),
      title: input.title,
      description: input.description,
      imgSrc: input.imgSrc,
      author: input.author,
      isAuthorized: false
    }
    inMemoryDatabase.posts.push(data)

    const output = inMemoryDatabase.posts.find((post) => post.postId === data.postId) as PostEntity

    return output
  }

  async getAll(input: IInputGetAllDTO): Promise<PostEntity[]> {
    if (input.type === "auth") return inMemoryDatabase.posts.filter((post) => post.isAuthorized === false)
    return inMemoryDatabase.posts.filter((post) => post.isAuthorized === true)
  }

  async exists(input: IInputExistsDTO): Promise<string> {
    const output = inMemoryDatabase.posts.find((p) => p.postId === input.postId)

    if (!output) {
      return "not_exists"
    }

    if (output.isAuthorized === false) {
      return "exists_not_authorized"
    }

    return "exists"
  }

  async changeStatusById(input: IInputUpdateDTO): Promise<PostEntity> {
    const output = inMemoryDatabase.posts.find((p) => p.postId === input.postId) as PostEntity

    output.isAuthorized = true

    return output
  }

  async deleteById(input: IInputDeleteDTO): Promise<boolean> {
    const index = inMemoryDatabase.posts.findIndex((p) => p.postId === input.postId)

    if (index !== -1) {
      inMemoryDatabase.posts.splice(index, 1)
      return true
    }

    return false
  }


}