import { Validate } from "../../../helpers/validate"
import { IRequestUpdateDTO } from "../../../interfaces/dtos/controllers/posts/update-post-dto"
import { IInputUpdateDTO } from "../../../interfaces/dtos/repositories/posts/update-post-dto"
import { IOutputUpdateDTO } from "../../../interfaces/dtos/use-cases/posts/update-post-dto"

export class UpdatePostsDTO {
    constructor (private validate: Validate) {}

	async input(request: IRequestUpdateDTO) {
		const inputDTO: IInputUpdateDTO = {
			postId: request.params.postId as string
		}

		if (!inputDTO.postId) throw new Error("Id do post é obrigatório!")

        await this.validate.postExists({ postId: inputDTO.postId, typeResult: "errorParams" })

		return inputDTO
	}
	
    output(response: IOutputUpdateDTO) {
		return response.message
	}
}