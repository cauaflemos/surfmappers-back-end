import { IOutputGetAllDTO } from "../../interfaces/dtos/use-cases/posts/get-all-posts-dto"
import { PostsRepository } from "../../interfaces/repositories/posts-repository"
import { PostEntity } from "../../../entities/post-entity"
import { IGetAllPostUseCase } from "../../interfaces/use-cases/posts/get-all-posts-use-case"

export class GetAllPostUseCase implements IGetAllPostUseCase {
  constructor(private postRepository: PostsRepository) {}

  async execute(): Promise<IOutputGetAllDTO> {
    try {
      const result: PostEntity[] | [] = await this.postRepository.getAll()
      const output = {
        result,
        message: "Posts autorizados!"
      }
      return output
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}