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

	it("Should be able to return all posts authorized", async () => {
		const sut = await postsRepository.getAll({ type: "auth" }) as PostEntity[]

		expect(sut).toEqual([
			{
				postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57",
				title: "Foto Altar",
				author: "Caio Lemos",
				description: "A noiva no altar",
				imgSrc: "https://cdn0.casamentos.com.br/article-vendor/8379/3_2/960/jpg/mari-leo-previas-49_13_178379-166013221645741.jpeg",
				isAuthorized: false
			},
		])
	})

	it("Should be able to return all posts not authorized", async () => {
		const sut = await postsRepository.getAll({ type: "common" }) as PostEntity[]

		expect(sut).toEqual([
			{
				postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946",
				title: "Foto Casamento",
				author: "Pedro Silva",
				description: "Casamento na praia",
				imgSrc: "https://cdn.alboompro.com/5ebc06c9e716a10001d89e71_6340062c3a7c0b000144d073/original_size/elopement-wedding-84.jpg?v=1",
				isAuthorized: true
			}
		])
	})

	it("Should be able to find a post by id", async () => {
		const sut = await postsRepository.exists({ postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57", authenticated: true })

		expect(sut).toEqual("exists_not_authorized")
	})

	it("Should be able to find a post by id", async () => {
		const sut = await postsRepository.exists({ postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946", authenticated: false })

		expect(sut).toEqual("exists")
	})

	it("Shouldn't be able to find a post by id", async () => {
		const sut = await postsRepository.exists({ postId: "123", authenticated: true })

		expect(sut).toEqual("not_exists")
	})
	
	it("Shouldn't be able to delete a post by id", async () => {
		const sut = await postsRepository.deleteById({ postId: "123" })

		expect(sut).toBeFalsy()
	})

	it("Should be able to delete a post by id", async () => {
		const sut = await postsRepository.deleteById({ postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946" })

		expect(sut).toBeTruthy()
	})
	
	it("Should be able to change a post status", async () => {
		const sut = await postsRepository.changeStatusById({ postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57" })

		expect(sut).toEqual({
			postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57",
			title: "Foto Altar",
			author: "Caio Lemos",
			description: "A noiva no altar",
			imgSrc: "https://cdn0.casamentos.com.br/article-vendor/8379/3_2/960/jpg/mari-leo-previas-49_13_178379-166013221645741.jpeg",
			isAuthorized: true
		})
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