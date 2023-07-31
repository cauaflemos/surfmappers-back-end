import { IInputCreateDTO } from "../application/interfaces/dtos/use-cases/posts/create-post-dto"

export class PostEntity {
    public readonly postId: string
    public title: string
    public description: string
    public imgSrc: string
    public author: string
    public isAuthorized: boolean

    private constructor(input: object) {
        return Object.assign(this, input)
    }

    static create(input: IInputCreateDTO) {		
        const patient = new PostEntity(input)
            return patient
    }
}