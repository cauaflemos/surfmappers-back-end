import { GetAllPostsDTO } from "../get-all-posts-controller"

describe("Get all posts dto", () => {
  let getAllPostsDTO: GetAllPostsDTO

  beforeAll(() => {
    getAllPostsDTO = new GetAllPostsDTO()
  })

  it("Should be able to return posts", async () => {
    const sut = getAllPostsDTO.output({
        result: [
          {
            postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946",
            title: "Foto Casamento",
            author: "Pedro Silva",
            description: "Casamento na praia",
            imgSrc: "https://example.com/image2.jpg",
            isAuthorized: true
          }
        ], message: "Posts autorizados!"
      })

      expect(sut).toEqual({
      result: [
        {
          postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946",
          title: "Foto Casamento",
          author: "Pedro Silva",
          description: "Casamento na praia",
          imgSrc: "https://example.com/image2.jpg",
          isAuthorized: true
        }
      ], message: "Posts autorizados!"
    })
  })

})