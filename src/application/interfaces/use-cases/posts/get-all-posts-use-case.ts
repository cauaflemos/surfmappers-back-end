import { IInputGetAllDTO } from "../../dtos/repositories/posts/get-all-posts-dto";
import { IOutputGetAllDTO } from "../../dtos/use-cases/posts/get-all-posts-dto";

export interface IGetAllPostUseCase {
  execute(input: IInputGetAllDTO): Promise<IOutputGetAllDTO>
}