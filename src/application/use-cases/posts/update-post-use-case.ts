import { PostsRepository } from "../../interfaces/repositories/posts-repository"
import { PostEntity } from "../../../entities/post-entity"
import { IOutputUpdateDTO } from "../../interfaces/dtos/use-cases/posts/update-post-dto"
import { IUpdatePostUseCase } from "../../interfaces/use-cases/posts/update-post-use-case"
import { IInputUpdateDTO } from "../../interfaces/dtos/repositories/posts/update-post-dto"

export class UpdatePostUseCase implements IUpdatePostUseCase {
  constructor(private postRepository: PostsRepository) {}

  async execute(input: IInputUpdateDTO): Promise<IOutputUpdateDTO> {
    try {
      const result: PostEntity = await this.postRepository.changeStatusById(input)
      const output = {
        result,
        message: "Post autorizado com sucesso!"
      }
      return output
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}