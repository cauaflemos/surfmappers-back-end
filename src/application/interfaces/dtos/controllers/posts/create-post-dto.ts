import { Request, Response } from "../../../../../infra/http-config"

interface IRequestCreateDTO extends Request {
  body: {
    title: string
    description: string
    imgSrc: string
    author: string
  }
}

type IResponseCreateDTO = Response<string | { message: string }>

export { IRequestCreateDTO, IResponseCreateDTO }