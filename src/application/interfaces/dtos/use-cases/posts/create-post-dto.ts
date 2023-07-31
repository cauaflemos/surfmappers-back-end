import { PostEntity } from "../../../../../entities/post-entity"
import { IInputCreateDTO } from "../../repositories/posts/create-post-dto"

interface IOutputCreateDTO {
  result: PostEntity
  message: string
}

export { IInputCreateDTO, IOutputCreateDTO }