import { IRequestCreateDTO, IResponseCreateDTO } from "../../dtos/controllers/posts/create-post-dto"

export interface ICreatePostController {
  handle(request: IRequestCreateDTO, response: IResponseCreateDTO): Promise<IResponseCreateDTO>
}