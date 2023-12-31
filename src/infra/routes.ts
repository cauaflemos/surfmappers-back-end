import { Router } from "./http-config"
import createPostController from "../application/factories/controllers/posts/create-post-controller-factory"
import getAllPostsController from "../application/factories/controllers/posts/get-all-posts-controller-factory"
import getUpdatePostsController from "../application/factories/controllers/posts/update-post-controller-factory"
import getDeletePostsController from "../application/factories/controllers/posts/delete-post-controller-factory"

const router = Router()

router.post("/gallery/post/add", createPostController())
router.get("/gallery/post/list/:type", getAllPostsController())
router.put("/gallery/post/authorize/:postId", getUpdatePostsController())
router.delete("/gallery/post/:postId", getDeletePostsController())


export default router