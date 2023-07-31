import { ICreatePostController } from "../../interfaces/controllers/posts/create-post-controller"
import { CreatePostUseCase } from "../../use-cases/posts/create-post-use-case"
import { CreatePostDTO } from "../../dtos/controllers/posts/create-post-dto"
import { IRequestCreateDTO, IResponseCreateDTO } from "../../interfaces/dtos/controllers/posts/create-post-dto"

export class CreatePostController implements ICreatePostController {
  private createPostDTO: CreatePostDTO

  constructor (private createPostUseCase: CreatePostUseCase) {
    this.createPostDTO = new CreatePostDTO()
  }

  async handle(request: IRequestCreateDTO, response: IResponseCreateDTO): Promise<IResponseCreateDTO> {
    try {
      const input = this.createPostDTO.input(request)
      const post = await this.createPostUseCase.execute(input)
      const output = this.createPostDTO.output(post)
      return response.status(201).json(output)
    } catch (error: any) {
      return response.status(400).json(error.message)
    }
  }
}