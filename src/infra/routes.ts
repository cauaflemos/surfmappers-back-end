import { Router } from "./http-config"
import createPostController from "../application/factories/controllers/posts/create-post-controller-factory"
import getAllPostsController from "../application/factories/controllers/posts/get-all-posts-controller-factory"

const router = Router()

router.post("/create-post", createPostController())
router.get("/list-posts-auth", getAllPostsController())

export default router