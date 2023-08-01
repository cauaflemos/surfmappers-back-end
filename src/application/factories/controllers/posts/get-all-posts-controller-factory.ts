import { httpControllerAdapter } from "../../../../infra/adapters/http-controller-adapter"
import { InMemoryPostsRepository } from "../../../../infra/database/repositories/posts-repository"
import { GetAllPostsController } from "../../../controllers/posts/get-all-posts-controller"
import { GetAllPostUseCase } from "../../../use-cases/posts/get-all-posts-use-case"
import generator from "../../helpers/generator"

const getAllPostsController = () => {
  const postRepository = new InMemoryPostsRepository(generator)
  const GetAllPostsUseCase = new GetAllPostUseCase(postRepository)
  const getAllPostsController = new GetAllPostsController(GetAllPostsUseCase)
  return httpControllerAdapter(getAllPostsController)
}

export default getAllPostsController