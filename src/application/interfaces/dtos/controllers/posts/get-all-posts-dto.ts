import { Request, Response } from "../../../../../infra/http-config"
import { PostType } from "../../repositories/posts/get-all-posts-dto"

interface IRequestGetAllDTO extends Request {
    params: {
        type: PostType
    }
}

type IResponseGetAllDTO = Response<string | { message: string }>

export { IResponseGetAllDTO, IRequestGetAllDTO }