import { IRequestDeleteDTO, IResponseDeleteDTO } from "../../dtos/controllers/posts/delete-post-dto"

export interface IDeletePostController {
  handle(request: IRequestDeleteDTO, response: IResponseDeleteDTO): Promise<IResponseDeleteDTO>
}