import { Router } from "./http-config"
import createPostController from "../application/factories/controllers/posts/create-post-controller-factory"

const router = Router()

router.post("/create-post", createPostController())

export default router