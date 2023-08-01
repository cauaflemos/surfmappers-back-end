import { GetAllPostUseCase } from "../../use-cases/posts/get-all-posts-use-case"
import { IResponseGetAllDTO, IRequestGetAllDTO } from "../../interfaces/dtos/controllers/posts/get-all-posts-dto"
import { UpdatePostsDTO } from "../../dtos/controllers/posts/update-post-dto"
import validate from "../../factories/helpers/validate"
import { IUpdatePostController } from "../../interfaces/controllers/posts/update-post-controller"
import { UpdatePostUseCase } from "../../use-cases/posts/update-post-use-case"
import { IRequestUpdateDTO, IResponseUpdateDTO } from "../../interfaces/dtos/controllers/posts/update-post-dto"

export class UpdatePostsController implements IUpdatePostController {
  private updatePostsDTO: UpdatePostsDTO

  constructor (private updatePostUseCase: UpdatePostUseCase) {
    this.updatePostsDTO = new UpdatePostsDTO(validate)
  }

  async handle(request: IRequestUpdateDTO, response: IResponseUpdateDTO): Promise<IResponseUpdateDTO> {
    try {
      const input = await this.updatePostsDTO.input(request)
      const post = await this.updatePostUseCase.execute(input)
      const output = this.updatePostsDTO.output(post)
      return response.status(200).json(output)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}