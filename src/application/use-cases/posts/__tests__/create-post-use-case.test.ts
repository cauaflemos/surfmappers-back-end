import { PostsRepository } from "../../../interfaces/repositories/posts-repository"
import { CreatePostUseCase } from "../create-post-use-case"
import { InMemoryPostsRepository } from "../../../../infra/database/repositories/posts-repository"
import { IInputCreateDTO, IOutputCreateDTO } from "../../../interfaces/dtos/use-cases/posts/create-post-dto"
import generator from "../../../factories/helpers/generator"

describe("Create post use case", () => {
    let postsRepository: PostsRepository
    let createPostUseCase: CreatePostUseCase

    beforeAll(() => {
        postsRepository = new InMemoryPostsRepository(generator)
        createPostUseCase = new CreatePostUseCase(postsRepository)
    })

    it("should be able to create post", async () => {
        const input: IInputCreateDTO = {
            title: "TESTE",
            description: "Desc Teste",
            imgSrc: "TESTE",
            author: "TESTE",
            isAuthorized: false
        }

        const sut = await createPostUseCase.execute(input) as IOutputCreateDTO

        expect(sut.message).toEqual("Post cadastrado com sucesso!")
        expect(typeof sut.result.postId === "string").toBeTruthy()
        expect(sut.result.title).toEqual(input.title)
        expect(sut.result.description).toEqual(input.description)
        expect(sut.result.imgSrc).toEqual(input.imgSrc)
        expect(sut.result.author).toEqual(input.author)
        expect(sut.result.isAuthorized).toEqual(input.isAuthorized)
    })

    it("should be able to create post", async () => {
        try {
            const input: IInputCreateDTO = {
                title: "TESTE",
                description: "Desc Teste",
                imgSrc: "TESTE",
                author: "TESTE",
                isAuthorized: false
            }
            const postsRepository: any = ""
            const invalidCreatePostUseCase = new CreatePostUseCase(postsRepository)
            await invalidCreatePostUseCase.execute(input)
        } catch (error: any) {

            const sut = error

            expect(sut.message).toEqual("this.postRepository.create is not a function")
        }
    })
})