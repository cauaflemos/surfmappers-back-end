import { PostsRepository } from "../../interfaces/repositories/posts-repository"
import { IOutputDeleteDTO } from "../../interfaces/dtos/use-cases/posts/delete-post-dto"
import { IInputDeleteDTO } from "../../interfaces/dtos/repositories/posts/delete-post-dto"
import { IDeletePostUseCase } from "../../interfaces/use-cases/posts/delete-post-use-case"

export class DeletePostUseCase implements IDeletePostUseCase {
  constructor(private postRepository: PostsRepository) {}

  async execute(input: IInputDeleteDTO): Promise<IOutputDeleteDTO> {
    try {
      await this.postRepository.deleteById(input)
      const output = {
        message: "Post deletado com sucesso!"
      }
      return output
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}