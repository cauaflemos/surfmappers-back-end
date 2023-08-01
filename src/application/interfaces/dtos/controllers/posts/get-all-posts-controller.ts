import { Request, Response } from "../../../../../infra/http-config"

interface IRequestGetAllDTO extends Request {}

type IResponseGetAllDTO = Response<string | { message: string }>

export { IResponseGetAllDTO, IRequestGetAllDTO }