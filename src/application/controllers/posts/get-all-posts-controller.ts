import { GetAllPostsDTO } from '../../dtos/controllers/posts/get-all-posts-dto';
import { IGetAllPostsController } from "../../interfaces/controllers/posts/get-all-posts-controller"
import { GetAllPostUseCase } from "../../use-cases/posts/get-all-posts-use-case"
import { IResponseGetAllDTO, IRequestGetAllDTO } from "../../interfaces/dtos/controllers/posts/get-all-posts-dto"

export class GetAllPostsController implements IGetAllPostsController {
  private getAllPostsDTO: GetAllPostsDTO

  constructor (private getAllPostsUseCase: GetAllPostUseCase) {
    this.getAllPostsDTO = new GetAllPostsDTO()
  }

  async handle(request: IRequestGetAllDTO, response: IResponseGetAllDTO): Promise<IResponseGetAllDTO> {
    try {
      const input = this.getAllPostsDTO.input(request)
      const post = await this.getAllPostsUseCase.execute(input)
      const output = this.getAllPostsDTO.output(post)
      return response.status(200).json(output)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}