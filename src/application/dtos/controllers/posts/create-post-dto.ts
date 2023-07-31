import { IRequestCreateDTO } from "../../../interfaces/dtos/controllers/posts/create-post-dto"
import { IInputCreateDTO, IOutputCreateDTO } from "../../../interfaces/dtos/use-cases/posts/create-post-dto"

export class CreatePostDTO {
	input(request: IRequestCreateDTO) {
		const inputDTO: IInputCreateDTO = {
			title: request.body.title,
			description: request.body.description,
			imgSrc: request.body.imgSrc,
			author: request.body.author
		}
		if (!inputDTO.title) throw new Error("Título do post é obrigatório!")
		if (!inputDTO.description) throw new Error("Descrição do post é obrigatório!")
		if (!inputDTO.imgSrc) throw new Error("Imagem do post é obrigatório!")
		if (!inputDTO.author) throw new Error("O autor do post é obrigatório!")

		return inputDTO
	}

	output(response: IOutputCreateDTO) {
		return response.message
	}
}