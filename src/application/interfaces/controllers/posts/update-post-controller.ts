import { IRequestUpdateDTO, IResponseUpdateDTO } from "../../dtos/controllers/posts/update-post-dto"

export interface IUpdatePostController {
  handle(request: IRequestUpdateDTO, response: IResponseUpdateDTO): Promise<IResponseUpdateDTO>
}