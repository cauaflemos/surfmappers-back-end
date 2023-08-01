import { InMemoryPostsRepository } from "../../../infra/database/repositories/posts-repository"
import { Validate } from "../../helpers/validate"
import generator from "./generator"

const validate = new Validate(new InMemoryPostsRepository(generator))

export default validate