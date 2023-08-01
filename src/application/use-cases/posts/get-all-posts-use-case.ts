import { IOutputGetAllDTO } from "../../interfaces/dtos/use-cases/posts/get-all-posts-dto"
import { PostsRepository } from "../../interfaces/repositories/posts-repository"
import { PostEntity } from "../../../entities/post-entity"
import { IGetAllPostUseCase } from "../../interfaces/use-cases/posts/get-all-posts-use-case"
import { IInputGetAllDTO } from "../../interfaces/dtos/repositories/posts/get-all-posts-dto"

export class GetAllPostUseCase implements IGetAllPostUseCase {
  constructor(private postRepository: PostsRepository) {}

  async execute(input: IInputGetAllDTO): Promise<IOutputGetAllDTO> {
    try {
      const result: PostEntity[] | [] = await this.postRepository.getAll(input)
      const output = {
        result,
        message: input.type === "auth" ? "Posts ainda não autorizados!" : "Posts autorizados!"
      }
      return output
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}