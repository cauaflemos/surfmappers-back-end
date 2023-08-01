import { Validate } from "../../../helpers/validate"
import { IRequestDeleteDTO } from "../../../interfaces/dtos/controllers/posts/delete-post-dto"
import { IInputDeleteDTO } from "../../../interfaces/dtos/repositories/posts/delete-post-dto"
import { IOutputDeleteDTO } from "../../../interfaces/dtos/use-cases/posts/delete-post-dto"

export class DeletePostsDTO {
    constructor (private validate: Validate) {}

	async input(request: IRequestDeleteDTO) {
		const inputDTO: IInputDeleteDTO = {
			postId: request.params.postId as string
		}

		if (!inputDTO.postId) throw new Error("Id do post é obrigatório!")

        await this.validate.postExists({ postId: inputDTO.postId, typeResult: "errorParams", authenticated: false })

		return inputDTO
	}
	
    output(response: IOutputDeleteDTO) {
		return response.message
	}
}