import { IRequestGetAllDTO } from "../../../interfaces/dtos/controllers/posts/get-all-posts-dto"
import { IInputGetAllDTO, PostType } from "../../../interfaces/dtos/repositories/posts/get-all-posts-dto"
import { IOutputGetAllDTO } from "../../../interfaces/dtos/use-cases/posts/get-all-posts-dto"

export class GetAllPostsDTO {
	input(request: IRequestGetAllDTO) {
		const inputDTO: IInputGetAllDTO = {
			type: request.params.type as PostType
		}

		if (!inputDTO.type) throw new Error("Tipo do post é obrigatório!")

		return inputDTO
	}
	
    output(response: IOutputGetAllDTO) {
		return response
	}
}