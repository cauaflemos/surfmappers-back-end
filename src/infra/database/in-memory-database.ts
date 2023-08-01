import { PostEntity } from "../../entities/post-entity"

interface InMemoryDatabase {
  posts: PostEntity[]
}

const inMemoryDatabase: InMemoryDatabase = {
  posts: [
    {
      postId: "6b7addf1-b8a2-4614-ae3d-22e0ed3ccd57",
      title: "Foto Altar",
      author: "Caio Lemos",
      description: "A noiva no altar",
      imgSrc: "https://cdn0.casamentos.com.br/article-vendor/8379/3_2/960/jpg/mari-leo-previas-49_13_178379-166013221645741.jpeg",
      isAuthorized: false
    },
    {
      postId: "9cccd88d-52cd-4ba7-81e1-7dfa83800946",
      title: "Foto Casamento",
      author: "Pedro Silva",
      description: "Casamento na praia",
      imgSrc: "https://example.com/image2.jpg",
      isAuthorized: true
    }
  ]
}

export default inMemoryDatabase