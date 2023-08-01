import { IRequestGetAllDTO, IResponseGetAllDTO } from "../../dtos/controllers/posts/get-all-posts-dto"

export interface IGetAllPostsController {
  handle(request: IRequestGetAllDTO, response: IResponseGetAllDTO): Promise<IResponseGetAllDTO>
}