import { httpControllerAdapter } from "../../../../infra/adapters/http-controller-adapter"
import { InMemoryPostsRepository } from "../../../../infra/database/repositories/posts-repository"
import { DeletePostsController } from "../../../controllers/posts/delete-post-controller"
import { DeletePostUseCase } from "../../../use-cases/posts/delete-post-use-case"
import generator from "../../helpers/generator"

const getDeletePostsController = () => {
  const postRepository = new InMemoryPostsRepository(generator)
  const GetDeletePostsUseCase = new DeletePostUseCase(postRepository)
  const getDeletePostsController = new DeletePostsController(GetDeletePostsUseCase)
  return httpControllerAdapter(getDeletePostsController)
}

export default getDeletePostsController