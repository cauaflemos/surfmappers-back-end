import { Request, Response } from "../../../../../infra/http-config"

interface IRequestUpdateDTO extends Request {
    params: {
        postId: string
    }
}

type IResponseUpdateDTO = Response<string | { message: string }>

export { IResponseUpdateDTO, IRequestUpdateDTO }