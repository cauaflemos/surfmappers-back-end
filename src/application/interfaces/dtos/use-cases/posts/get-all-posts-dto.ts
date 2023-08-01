import { PostEntity } from "../../../../../entities/post-entity"

interface IOutputGetAllDTO {
    result: PostEntity[] | []
    message: string
}

export { IOutputGetAllDTO }