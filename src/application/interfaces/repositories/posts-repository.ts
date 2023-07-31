import { PostEntity } from "../../../entities/post-entity"
import { IInputCreateDTO } from "../dtos/repositories/posts/create-post-dto"

export interface PostsRepository {
  create(inputDTO: IInputCreateDTO): Promise<PostEntity>
}