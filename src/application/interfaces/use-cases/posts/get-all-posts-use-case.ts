import { IOutputGetAllDTO } from "../../dtos/use-cases/posts/get-all-posts-dto";

export interface IGetAllPostUseCase {
  execute(): Promise<IOutputGetAllDTO>
}