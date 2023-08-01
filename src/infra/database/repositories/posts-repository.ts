import { IInputCreateDTO } from "../../../application/interfaces/dtos/repositories/posts/create-post-dto"
import { PostEntity } from "../../../entities/post-entity"
import { PostsRepository } from "../../../application/interfaces/repositories/posts-repository"
import { IGenerator } from "../../../application/interfaces/helpers/generator"
import inMemoryDatabase from "../in-memory-database"

export class InMemoryPostsRepository implements PostsRepository {
  constructor (private generator: IGenerator) {}

  async create(input: IInputCreateDTO): Promise<PostEntity> {
    const data = {
      postId: this.generator.randomUUID(),
      title: input.title,
      description: input.description,
      imgSrc: input.imgSrc,
      author: input.author,
      isAuthorized: false
    }
    inMemoryDatabase.posts.push(data)

    const output = inMemoryDatabase.posts.find((post) => post.postId === data.postId) as PostEntity;

    return output;
  }

  async getAll(): Promise<PostEntity[]> {
    const output = inMemoryDatabase.posts.filter((post) => post.isAuthorized === true);
    return output;
  }

}