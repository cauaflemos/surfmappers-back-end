import { IInputCreateDTO, IOutputCreateDTO } from "../../dtos/use-cases/posts/create-post-dto"

export interface ICreatePostUseCase {
  execute(input: IInputCreateDTO): Promise<IOutputCreateDTO>
}