import { DeletePostsDTO } from "../../dtos/controllers/posts/delete-post-dto"
import validate from "../../factories/helpers/validate"
import { IDeletePostController } from "../../interfaces/controllers/posts/delete-post-controller"
import { DeletePostUseCase } from "../../use-cases/posts/delete-post-use-case"
import { IRequestDeleteDTO, IResponseDeleteDTO } from "../../interfaces/dtos/controllers/posts/delete-post-dto"

export class DeletePostsController implements IDeletePostController {
  private deletePostsDTO: DeletePostsDTO

  constructor (private deletePostUseCase: DeletePostUseCase) {
    this.deletePostsDTO = new DeletePostsDTO(validate)
  }

  async handle(request: IRequestDeleteDTO, response: IResponseDeleteDTO): Promise<IResponseDeleteDTO> {
    try {
      const input = await this.deletePostsDTO.input(request)
      const post = await this.deletePostUseCase.execute(input)
      const output = this.deletePostsDTO.output(post)
      return response.status(200).json(output)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}