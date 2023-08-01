import { httpControllerAdapter } from "../../../../infra/adapters/http-controller-adapter"
import { InMemoryPostsRepository } from "../../../../infra/database/repositories/posts-repository"
import { UpdatePostsController } from "../../../controllers/posts/update-post-controller"
import { UpdatePostUseCase } from "../../../use-cases/posts/update-post-use-case"
import generator from "../../helpers/generator"

const getUpdatePostsController = () => {
  const postRepository = new InMemoryPostsRepository(generator)
  const GetUpdatePostsUseCase = new UpdatePostUseCase(postRepository)
  const getUpdatePostsController = new UpdatePostsController(GetUpdatePostsUseCase)
  return httpControllerAdapter(getUpdatePostsController)
}

export default getUpdatePostsController