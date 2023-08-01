import { IInputUpdateDTO } from "../interfaces/dtos/repositories/posts/update-post-dto";
import { PostsRepository, TypeOutputExists } from "../interfaces/repositories/posts-repository";

export class Validate {
    constructor(private postRepository: PostsRepository) {}

    async postExists(input: ValidatePostExistsDTO): Promise<TypeOutputExists> {
        const output = await this.postRepository.exists({ postId: input.postId, authenticated: input.authenticated });
    
        return output;
    }
    

}