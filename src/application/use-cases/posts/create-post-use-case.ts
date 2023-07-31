import { ICreatePostUseCase } from "../../interfaces/use-cases/posts/create-post-use-case"
import { IInputCreateDTO, IOutputCreateDTO } from "../../interfaces/dtos/use-cases/posts/create-post-dto"
import { PostsRepository } from "../../interfaces/repositories/posts-repository"
import { PostEntity } from "../../../entities/post-entity"

export class CreatePostUseCase implements ICreatePostUseCase {
  constructor(private postRepository: PostsRepository) {}

  async execute(input: IInputCreateDTO): Promise<IOutputCreateDTO> {
    try {
      const createPost = PostEntity.create(input)
      const post = await this.postRepository.create(createPost)
      const output = {
        result: post,
        message: "Post cadastrado com sucesso!"
      }
      return output
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}