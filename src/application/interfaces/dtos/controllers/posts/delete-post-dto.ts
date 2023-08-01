import { Request, Response } from "../../../../../infra/http-config"

interface IRequestDeleteDTO extends Request {
    params: {
        postId: string
    }
}

type IResponseDeleteDTO = Response<string | { message: string }>

export { IResponseDeleteDTO, IRequestDeleteDTO }