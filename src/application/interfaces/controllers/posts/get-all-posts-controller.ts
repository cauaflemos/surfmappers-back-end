import { IRequestGetAllDTO, IResponseGetAllDTO } from "../../dtos/controllers/posts/get-all-posts-controller"

export interface IGetAllPostsController {
  handle(request: IRequestGetAllDTO, response: IResponseGetAllDTO): Promise<IResponseGetAllDTO>
}