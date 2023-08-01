import { IInputDeleteDTO } from "../../dtos/repositories/posts/delete-post-dto";
import { IOutputDeleteDTO } from "../../dtos/use-cases/posts/delete-post-dto";

export interface IDeletePostUseCase {
  execute(input: IInputDeleteDTO): Promise<IOutputDeleteDTO>
}