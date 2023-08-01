import { IInputUpdateDTO } from "../../dtos/repositories/posts/update-post-dto";
import { IOutputUpdateDTO } from "../../dtos/use-cases/posts/update-post-dto";

export interface IUpdatePostUseCase {
  execute(input: IInputUpdateDTO): Promise<IOutputUpdateDTO>
}