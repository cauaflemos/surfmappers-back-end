import { PostEntity } from "../../entities/post-entity"

interface InMemoryDatabase {
  posts: PostEntity[]
}

const inMemoryDatabase: InMemoryDatabase = {
  posts: []
}

export default inMemoryDatabase