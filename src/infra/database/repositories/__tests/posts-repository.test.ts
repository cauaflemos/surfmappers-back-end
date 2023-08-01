import generator from "../../../../application/factories/helpers/generator"
import { IInputCreateDTO } from "../../../../application/interfaces/dtos/repositories/posts/create-post-dto"
import { PostsRepository } from "../../../../application/interfaces/repositories/posts-repository"
import { PostEntity } from "../../../../entities/post-entity"
import { InMemoryPostsRepository } from "../posts-repository"

describe("In memory posts repository", () => {
	let postsRepository: PostsRepository

	beforeAll(() => {
		postsRepository = new InMemoryPostsRepository(generator)
	})

	it("Should be able to return all posts", async () => {
		const sut = await postsRepository.getAll() as PostEntity[]

		expect(sut).toEqual([
			{
				postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946",
				title: "Foto Casamento",
				author: "Pedro Silva",
				description: "Casamento na praia",
				imgSrc: "https://example.com/image2.jpg",
				isAuthorized: true
			}
		])
	})

	it("should be able to create a post", async () => {
		const input: IInputCreateDTO = {
			title: "Foto Altar",
			author: "Caio Lemos",
			description: "A noiva no altar",
			imgSrc: "https://cdn0.casamentos.com.br/article-vendor/8379/3_2/960/jpg/mari-leo-previas-49_13_178379-166013221645741.jpeg",
		}

		const sut = await postsRepository.create(input) as PostEntity

		expect(typeof sut.postId === "string").toBeTruthy()
		expect(sut.title).toEqual(input.title)
		expect(sut.author).toEqual(input.author)
		expect(sut.imgSrc).toEqual(input.imgSrc)
	})

})