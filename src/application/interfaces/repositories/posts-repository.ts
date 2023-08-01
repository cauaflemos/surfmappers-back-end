import { PostEntity } from "../../../entities/post-entity"
import { IInputCreateDTO } from "../dtos/repositories/posts/create-post-dto"
import { IInputDeleteDTO } from "../dtos/repositories/posts/delete-post-dto"
import { IInputExistsDTO } from "../dtos/repositories/posts/exists-post-dto"
import { IInputGetAllDTO } from "../dtos/repositories/posts/get-all-posts-dto"
import { IInputUpdateDTO } from "../dtos/repositories/posts/update-post-dto"

export interface PostsRepository {
  create(inputDTO: IInputCreateDTO): Promise<PostEntity>
  getAll(inputDTO: IInputGetAllDTO): Promise<PostEntity[]>
  exists(inputDTO: IInputExistsDTO): Promise<string>
  changeStatusById(inputDTO: IInputUpdateDTO): Promise<PostEntity>
  deleteById(inputDTO: IInputDeleteDTO): Promise<boolean>
}