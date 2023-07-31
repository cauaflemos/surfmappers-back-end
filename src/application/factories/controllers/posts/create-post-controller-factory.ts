import { httpControllerAdapter } from "../../../../infra/adapters/http-controller-adapter"
import { InMemoryPostsRepository } from "../../../../infra/database/repositories/posts-repository"
import { CreatePostController } from "../../../controllers/posts/create-post-controller"
import { CreatePostUseCase } from "../../../use-cases/posts/create-post-use-case"
import generator from "../../helpers/generator"

const createPostController = () => {
  const postRepository = new InMemoryPostsRepository(generator)
  const createPostUseCase = new CreatePostUseCase(postRepository)
  const createPostController = new CreatePostController(createPostUseCase)
  return httpControllerAdapter(createPostController)
}

export default createPostController